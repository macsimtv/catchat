<script setup>
import { ref, inject } from "vue";

const { state, setStateProp } = inject("state");

import ModalParamsServer from "./ModalParamsServer.vue";
import ModalInvite from "./ModalInvite.vue";

const isOpen = ref(false);
const isModalInviteOpen = ref(false);

function closeModal() {
  isOpen.value = !isOpen.value;
}

function isOwner() {
  if (localStorage["username"] == state.currentChannel.creator) return true;
  return false;
}

function onCloseModalInvite() {
  isModalInviteOpen.value = !isModalInviteOpen.value;
}

function onOpenModalInvite() {
  isModalInviteOpen.value = !isModalInviteOpen.value;
}
</script>

<template>
  <div class="server-bar">
    <div class="server-bar__container">
      <h2 class="server-bar__title">{{ state.currentChannel.name }}</h2>
      <div v-if="isOwner()" class="server-bar__menu">
        <button class="server-bar__invite server-bar__button" @click="onOpenModalInvite()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
        </button>
        <button
          class="server-bar__settings server-bar__button"
          @click="isOpen = !isOpen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>

        <ModalParamsServer
          v-if="isOpen"
          @close="closeModal"
        ></ModalParamsServer>
      </div>
    </div>
  </div>
  <ModalInvite :isOpen="isModalInviteOpen" @onCloseModalInvite="onCloseModalInvite" />
</template>
