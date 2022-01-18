<template>
  <section class="home-server-list">
    <div class="home-server-list__container">
      <div v-if="loading">
        <ServerLoading></ServerLoading>
      </div>
      <div v-else>
        <ServerIcon
          v-for="(channel, index) in channels"
          :key="channel.id"
          :channel="channel"
          :index="index"
        />
      </div>
      <ServerAddIcon />
    </div>
  </section>
</template>

<script setup>
import { inject } from "vue";
let { loading } = inject("state");

let { channels, currentChannel } = inject("state");
/* store.value.currentChannel = channels[0]; */

import ServerIcon from "../block/ServerIcon.vue";
import ServerAddIcon from "../block/ServerAddIcon.vue";
import ServerLoading from "../block/ServerLoading.vue";
</script>
