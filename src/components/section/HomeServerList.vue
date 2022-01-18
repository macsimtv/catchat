<script setup>
import { inject } from "vue";
const { state, setStateProp } = inject("state");
/* let { channels } = store; */
/* store.value.currentChannel = channels[0]; */

import ServerIcon from "../block/ServerIcon.vue";
import ServerAddIcon from "../block/ServerAddIcon.vue";
import ServerLoading from "../block/ServerLoading.vue";

function onChangeServer(id) {
  const newCurrentChannel = state.channels.find((item) => item.id == id);
  setStateProp('currentChannel', newCurrentChannel);
}

</script>

<template>
  <section class="home-server-list">
    <div class="home-server-list__container">
      <div v-if="state.loading">
        <ServerLoading v-for="index in 3" :key="index"></ServerLoading>
      </div>
      <template v-else>
        <ServerIcon
          v-for="(channel, index) in state.channels"
          :key="channel.id"
          :channel="channel"
          :index="index"
          @click="onChangeServer(channel.id)"
        />
      </template>
      <ServerAddIcon />
    </div>
  </section>
</template>
