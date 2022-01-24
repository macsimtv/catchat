<template>
  <teleport to="body">
    <transition name="fade"
      ><div class="modal" @keydown.esc="$emit('close')">
        <div class="modal__container">
          <div class="modal__body-bis">
            <div class="modal__server-option">
              <h3 @click="windw = 'edit'">Edit Server</h3>
              <h3 @click="windw = 'user'">User's List</h3>
            </div>

            <div class="modal__server-section" v-if="windw == 'edit'">
              <form class="modal__form" @submit.prevent="updateServ">
                <input
                  v-model="serv.name"
                  type="text"
                  placeholder="Nom du serveur"
                />
                <input
                  v-model="serv.img"
                  type="url"
                  placeholder="Adresse de l'image du serveur"
                />
                <ServerChooseColor />
                <button type="submit">Mettre a jour le serveur</button>
                <button class="delete">Effacer le server</button>
              </form>
            </div>
            <div class="modal__server-section" v-else="windw == 'user'"></div>
          </div>
          <div @click="$emit('close')" class="modal__background"></div>
        </div></div
    ></transition>
  </teleport>
</template>

<script setup>
import { inject, ref } from "vue";
import ServiceChannel from "../../services/module/channel";
import StoreRefresh from "../../store/actions";
import ServerAddColor from "./ServerChooseColor.vue";

const { state, setStateProp } = inject("state");
const serv = ref({
  name: state.currentChannel.name,
  img: state.currentChannel.img,
  theme: null,
});
const windw = ref("edit");
const users = ref([]);
users.value = state.currentChannel.users;
const emits = defineEmits(["close"]);

async function updateServ() {
  console.log({ ...serv.value });
  await ServiceChannel.updateMetaChannel(state.currentChannel.id, {
    ...serv.value,
  });
  StoreRefresh.channels();
  emits("close");
}

async function deleteServ() {
  await ServiceChannel.deleteChannel(serv.value.id);
  StoreRefresh.channels();
  emits("close");
}

async function banUser() {
  await ServiceChannel.banUserFromChannel(serv.value.id, users.value[0]);
  StoreRefresh.channels();
}
</script>
