<script setup>
import Header from "../components/Header.vue";
import HomeUserList from "../components/section/HomeUserList.vue";
import HomeServerList from "../components/section/HomeServerList.vue";
import HomeChatbox from "../components/section/HomeChatbox.vue";
import ServiceChannel from "../services/module/channel";
import ServiceMessages from "../services/module/messages";

import { onMounted, inject, onUpdated } from "vue";
/* import store from "../store/index"; */
const { state, setStateProp } = inject("state");
let socket;

// Get Data
onMounted(async () => {
  // Channels
  setStateProp("loading", true);
  const dataChannels = await ServiceChannel.listOfChannel();
  setStateProp("channels", dataChannels.data);
  setStateProp("currentChannel", dataChannels.data[0]);
  // Messages
  let dataMessages = await ServiceMessages.getAll(state.currentChannel.id, 0);
  setStateProp("messages", dataMessages.data);

  socket = new WebSocket(`wss://edu.tardigrade.land/msg/ws/channel/${state.currentChannel.id}/token/${localStorage['token']}`);

  socket.addEventListener('open', function (event) {
    socket.send('Coucou le serveur !');
    console.log('et sa fais bim bam boum')
  });

  socket.onmessage = (msg) => {
    let msgs = JSON.parse(JSON.stringify(state.messages))
    msgs.push(JSON.parse(msg.data))
    setStateProp('messages', msgs)
  }

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
