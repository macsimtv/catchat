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
                <button type="submit">Mettre a jour le serveur</button>
                <button class="delete">Effacer le server</button>
              </form>
            </div>
            <div class="modal__server-section" v-else="windw == 'user'">
              <form class="modal__form" @submit.prevent="">
                <div>
                  <input
                    class="search"
                    v-model="userSearch"
                    type="text"
                    placeholder="Nom d'un utilisateur"
                  />
                  <button class="search" type="submit">
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </form>

              <ul class="modal__server-list">
                <li class="modal__server-user" v-for="user in filteredUser">
                  {{ user }}

                  <button class="delete">
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
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div @click="$emit('close')" class="modal__background"></div>
        </div></div
    ></transition>
  </teleport>
</template>

<script setup>
import { inject, ref, computed } from "vue";
import ServiceChannel from "../../services/module/channel";
import StoreRefresh from "../../store/actions";

const { state, setStateProp } = inject("state");
const serv = ref({
  name: state.currentChannel.name,
  img: state.currentChannel.img,
  theme: null,
});
const userSearch = ref("");
const windw = ref("edit");
const users = ref([]);
users.value = state.currentChannel.users;
const emits = defineEmits(["close"]);

const filteredUser = computed(() => {
  return users.value.filter((u) => u.match(userSearch.value));
});

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
