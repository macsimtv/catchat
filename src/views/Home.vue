<script setup>
import Header from "../components/Header.vue";
import HomeUserList from "../components/section/HomeUserList.vue";
import HomeServerList from "../components/section/HomeServerList.vue";
import HomeChatbox from "../components/section/HomeChatbox.vue";
import channel from "../services/module/channel";

import { onMounted, inject } from "vue";
/* import store from "../store/index"; */
const { state, setStateProp } = inject("state");

// Get Data
onMounted(async () => {
  // Channels
  setStateProp("loading", true);
  let { data } = await channel.listOfChannel();
  setStateProp("channels", data);
  /*  store.channels.splice(0, store.channels.length, ...data); */
  setStateProp("currentChannel", data[0]);

  // End Loading
  setStateProp("loading", false);
  /* store.loading = true; */
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
