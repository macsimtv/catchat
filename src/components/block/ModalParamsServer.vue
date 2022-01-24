<template>
  <teleport to="body">
    <transition name="fade"
      ><div class="modal" @keydown.esc="$emit('close')">
        <div class="modal__container">
          <div class="modal__body-bis">
            <div class="server-option">
              <h3 @click="windw == 'edit'">Edit Server</h3>
              <h3 @click="windw == 'user'">User's List</h3>
            </div>

            <div v-if="windw == 'edit'">
              <form class="modal__form">
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
                <button type="submit">Créer le serveur</button>
              </form>
            </div>
            <div v-else="windw == 'user'"></div>
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

const { state, setStateProp } = inject("state");
const serv = ref({
  id: state.currentChannel.id,
  name: state.currentChannel.name,
  img: state.currentChannel.img,
  theme: {},
});
const windw = "edit";
const users = ref([]);
users.value = state.currentChannel.users;
const emits = defineEmits(["close"]);

async function updateServ() {
  await ServiceChannel.updateMetaChannel(serv.value);
  StoreRefresh.channels();
}

async function deleteServ() {
  await ServiceChannel.deleteChannel(serv.value.id);
  StoreRefresh.channels();
}

async function banUser() {
  await ServiceChannel.banUserFromChannel(serv.value.id);
  StoreRefresh.channels();
}
</script>
