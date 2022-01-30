<script setup>
import { onMounted, inject } from "vue";

import serviceChannel from "../services/module/channel";
import serviceMessages from "../services/module/messages";
import StoreRefresh from "../store/actions";

// Components
import Header from "../components/Header.vue";
import HomeUserList from "../components/section/HomeUserList.vue";
import HomeServerList from "../components/section/HomeServerList.vue";
import HomeChatbox from "../components/section/HomeChatbox.vue";

const { state, setStateProp } = inject("state");

// Get Data
onMounted(async () => {
  // Loading
  setStateProp("loading", true);

  // Channels
  const dataChannels = await serviceChannel.listOfChannel();
  setStateProp("channels", dataChannels.data);
  setStateProp("currentChannel", dataChannels.data[0]);

  // Messages
  let dataMessages = await serviceMessages.getAll(state.currentChannel.id, 0);
  setStateProp("messages", dataMessages.data);

  let socket = new WebSocket(
    `wss://edu.tardigrade.land/msg/ws/channel/${state.currentChannel.id}/token/${localStorage["token"]}`
  );
  setStateProp("socket", socket);
  state.socket.addEventListener("open", function (event) {
  });

  state.socket.onmessage = (msg) => {
    let msgs = JSON.parse(JSON.stringify(state.messages));
    msgs.push(JSON.parse(msg.data));
    setStateProp("messages", msgs);
  };

  StoreRefresh.theme();

  // End Loading
  setStateProp("loading", false);
});
</script>

<template>
  <Header />
  <main class="home">
    <div class="home__container">
      <HomeServerList />
      <HomeChatbox />
      <HomeUserList />
    </div>
  </main>
</template>
