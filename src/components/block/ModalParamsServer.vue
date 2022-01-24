<template>
  <teleport to="body">
    <transition name="fade"
      ><div class="modal">
        <div class="modal__container">
          <div class="modal__body-bis">
            <div class="server-option">
              <h3 @click="page == 'edit'">Edit Server</h3>
              <h3 @click="page == 'user'">User's List</h3>
            </div>

            <div v-if="page == 'edit'">
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
            <div v-else="page == 'user'"></div>
          </div>
          <div @click="close" class="modal__background"></div>
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
defineEmits(["close"]);

function updateServ() {
  await ServiceChannel.updateMetaChannel(serv.value);
  StoreRefresh.channels();
}

function deleteServ() {
  await ServiceChannel.deleteChannel(serv.value.id);
  StoreRefresh.channels();
}

function banUser() {
  await ServiceChannel.banUserFromChannel(serv.value.id);
  StoreRefresh.channels();
}
</script>
