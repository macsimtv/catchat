<script setup>
import { inject, ref, computed } from "vue";
import ServiceMessages from "../../services/module/messages";
import ServiceChannel from "../../services/module/channel";
const { state, setStateProp } = inject("state");

import ServerIcon from "../block/ServerIcon.vue";
import ServerAddIcon from "../block/ServerAddIcon.vue";
import ServerLoading from "../block/ServerLoading.vue";

import StoreRefresh from "../../store/actions";
import ServerChooseColor from "../block/ServerChooseColor.vue";

let isModalOpen = ref(false);
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

const serverOptions = ref({
  name: "",
  img: "",
  theme: {
    primary_color: "#35356c",
    primary_color_dark: "#35356c",
    accent_color: "#28264f",
    text_color: "#fff",
    accent_text_color: "#fff",
  },
});

function onChangeServer(id) {
  const newCurrentChannel = state.channels.find((item) => item.id == id);
  setStateProp("currentChannel", newCurrentChannel);
  changeMessagesChannel();
  document.querySelector("html").className = "";
  document.querySelector("html").classList.add(loadTheme.value);
  StoreRefresh.channels();
  state.socket.close();
  let socket = new WebSocket(
    `wss://edu.tardigrade.land/msg/ws/channel/${state.currentChannel.id}/token/${localStorage["token"]}`
  );
  setStateProp("socket", socket);
  state.socket.onmessage = (msg) => {
    let msgs = JSON.parse(JSON.stringify(state.messages));
    msgs.push(JSON.parse(msg.data));
    setStateProp("messages", msgs);
  };
}

async function changeMessagesChannel() {
  // Messages
  let dataMessages = await ServiceMessages.getAll(state.currentChannel.id, 0);
  setStateProp("messages", dataMessages.data);
}

function setupThemeNewChannel(theme) {
  serverOptions.value.theme = theme;
}

async function onCreateServer() {
  const newChannel = await ServiceChannel.createChannel(serverOptions.value);
  serverOptions.value.name = "";
  serverOptions.value.img = "";
  serverOptions.value.theme = {};
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
      ><div
        v-if="isModalOpen"
        class="modal"
        @submit.prevent="onCreateServer"
        @keydown.esc="isModalOpen = !isModalOpen"
      >
        <div class="modal__container">
          <div class="modal__body">
            <h2 class="modal__title">Créer un Serveur</h2>
            <form class="modal__form">
              <input
                v-model="serverOptions.name"
                type="text"
                placeholder="Nom du serveur"
              />
              <input
                v-model="serverOptions.img"
                type="url"
                placeholder="Adresse de l'image du serveur"
              />

              <ServerChooseColor
                :selectedTheme="serverOptions.theme"
                @change-theme="setupThemeNewChannel"
              ></ServerChooseColor>
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
