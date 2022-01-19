<script setup>
import { inject, ref } from "vue";
import ServiceMessages from "../../services/module/messages";
import ServiceChannel from "../../services/module/channel";
const { state, setStateProp } = inject("state");

import ServerIcon from "../block/ServerIcon.vue";
import ServerAddIcon from "../block/ServerAddIcon.vue";
import ServerLoading from "../block/ServerLoading.vue";

import StoreRefresh from "../../store/actions";

let isModalOpen = ref(false);

const serverName = ref('');
const serverImageUrl = ref('');

function onChangeServer(id) {
  const newCurrentChannel = state.channels.find((item) => item.id == id);
  setStateProp("currentChannel", newCurrentChannel);
  changeMessagesChannel();

  StoreRefresh.channels();
}

async function changeMessagesChannel() {
  // Messages
  let dataMessages = await ServiceMessages.listOfMessage(
    state.currentChannel.id,
    40
  );
  setStateProp("messages", dataMessages.data);
}

async function onCreateServer() {
  const newChannel = await ServiceChannel.createChannel({
    name: serverName.value,
    img: serverImageUrl.value
  });

  StoreRefresh.channels();

  isModalOpen.value = !isModalOpen.value;
}

</script>

<template>
  <section class="home-server-list">
    <div class="home-server-list__container">
      <template v-if="state.loading">
        <ServerLoading v-for="index in 3" :key="index"></ServerLoading>
      </template>
      <template v-else>
        <ServerIcon
          v-for="(channel, index) in state.channels"
          :key="channel.id"
          :channel="channel"
          :index="index"
          @click="onChangeServer(channel.id)"
        />
      </template>
      <ServerAddIcon @click="isModalOpen = !isModalOpen" />
    </div>
  </section>
  <p class="server-name"></p>
  <teleport to="body">
    <transition name="fade"
      ><div v-if="isModalOpen" class="modal" @submit.prevent="onCreateServer">
        <div class="modal__container">
          <div class="modal__body">
            <h2 class="modal__title">Créer un Serveur</h2>
            <form class="modal__form">
              <input v-model="serverName" type="text" placeholder="Nom du serveur" />
              <input v-model="serverImageUrl" type="url" placeholder="Adresse de l'image du serveur" />
              <button type="submit">Créer le serveur</button>
            </form>
          </div>
          <div
            @click="isModalOpen = !isModalOpen"
            class="modal__background"
          ></div>
        </div></div
    ></transition>
  </teleport>
</template>
