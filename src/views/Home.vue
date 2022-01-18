<script setup>
import Header from "../components/Header.vue";
import HomeUserList from "../components/section/HomeUserList.vue";
import HomeServerList from "../components/section/HomeServerList.vue";
import HomeChatbox from "../components/section/HomeChatbox.vue";
import channel from "../services/module/channel";

import { onMounted, inject } from "vue";
/* import store from "../store/index"; */
const store = inject("state");

// Get Data

onMounted(async () => {
  // Channels
  store.loading = true;
  let { data } = await channel.listOfChannel();
  store.channels.splice(0, store.channels.length, ...data);
  store.currentChannel = data[0];

  // End Loading
  store.loading = false;
});
</script>

<template>
  <Header />
  <main v-if="!store.loading" class="home">
    <div class="home__container">
      <HomeServerList />
      <HomeChatbox />
      <HomeUserList />
    </div>
  </main>
</template>
