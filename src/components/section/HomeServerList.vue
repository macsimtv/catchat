<template>
  <section class="home-server-list">
    <div class="home-server-list__container">
      <div v-if="state.loading">
        <ServerLoading v-for="n in 3"></ServerLoading>
      </div>
      <template v-else>
        <ServerIcon
          v-for="(channel, index) in state.channels"
          :key="channel.id"
          :channel="channel"
          :index="index"
        />
      </template>
      <ServerAddIcon />
    </div>
  </section>
</template>

<script setup>
import { inject } from "vue";
const { state, setStateProp } = inject("state");
/* let { channels } = store; */
/* store.value.currentChannel = channels[0]; */

import ServerIcon from "../block/ServerIcon.vue";
import ServerAddIcon from "../block/ServerAddIcon.vue";
import ServerLoading from "../block/ServerLoading.vue";
</script>
