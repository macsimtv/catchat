<script setup>
import Header from "../components/Header.vue";
import HomeUserList from "../components/section/HomeUserList.vue";
import HomeServerList from "../components/section/HomeServerList.vue";
import HomeChatbox from "../components/section/HomeChatbox.vue";
import ServiceChannel from "../services/module/channel";
import ServiceMessages from "../services/module/messages";

import { onMounted, inject, ref, computed, onUpdated } from "vue";
/* import store from "../store/index"; */
const { state, setStateProp } = inject("state");

const theme = ref([
  {
    primary_color: "#35356c",
    primary_color_dark: "#35356c",
    accent_color: "#28264f",
    text_color: "#fff",
    accent_text_color: "#fff",
  },
  {
    primary_color: "#63372C",
    primary_color_dark: "#63372C",
    accent_color: "#262322",
    text_color: "#fff",
    accent_text_color: "#fff",
  },
  {
    primary_color: "#1F7A8C",
    primary_color_dark: "#1F7A8C",
    accent_color: "#022B3A",
    text_color: "#fff",
    accent_text_color: "#fff",
  },
]);
const loadTheme = computed(() => {
  if (state.currentChannel !== null) {
    if (
      state.currentChannel.theme?.primary_color == theme.value[1].primary_color
    ) {
      return "theme--chocolate";
    }
    if (
      state.currentChannel.theme?.primary_color == theme.value[2].primary_color
    ) {
      return "theme--ocean";
    }
  }
  return "";
});

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

  let socket = new WebSocket(
    `wss://edu.tardigrade.land/msg/ws/channel/${state.currentChannel.id}/token/${localStorage["token"]}`
  );
  setStateProp("socket", socket);
  state.socket.addEventListener("open", function (event) {
    console.log("socket connection successful");
  });

  state.socket.onmessage = (msg) => {
    let msgs = JSON.parse(JSON.stringify(state.messages));
    msgs.push(JSON.parse(msg.data));
    setStateProp("messages", msgs);
  };

  // End Loading
  setStateProp("loading", false);
});
</script>

<template>
  <div :class="loadTheme">
    <Header />
    <main class="home">
      <div class="home__container">
        <HomeServerList />
        <HomeChatbox />
        <HomeUserList />
      </div>
    </main>
  </div>
</template>
