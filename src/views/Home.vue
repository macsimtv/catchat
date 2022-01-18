<script setup>
import Header from "../components/Header.vue";
import HomeUserList from "../components/section/HomeUserList.vue";
import HomeServerList from "../components/section/HomeServerList.vue";
import HomeChatbox from "../components/section/HomeChatbox.vue";
import channel from "../services/module/channel";

import { onMounted } from "vue";
import store from "../store/index";

// Get Data
store.value.loading = true;

onMounted(async () => {
  // Channels
  let { data } = await channel.listOfChannel();
  store.value.channels.splice(0, store.value.channels.length, ...data);
  store.value.currentChannel = data[0];

  // End Loading
  store.value.loading = false;
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
