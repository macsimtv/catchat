<script setup>
import { ref, inject } from "vue";
import channelServices from "../../services/module/channel";

const { state, setStateProp } = inject("state");

defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["onCloseModalInvite"]);

const userInput = ref("");

async function onSend() {
  const userAdded = await channelServices.addUserInAChannel(
    state.currentChannel.id,
    userInput.value
  );

  let userList = state.currentChannel.users;
  userList.push(userInput.value);

  userInput.value = "";
  onCloseModalInvite();
}

function onCloseModalInvite() {
  emit("onCloseModalInvite");
}
</script>

<template>
  <teleport to="body">
    <transition name="fade">
      <div v-if="isOpen" class="modal-invite">
        <div class="modal-invite__container">
          <div class="modal-invite__body">
            <h2 class="modal-invite__title">Ajouter un utilisateur</h2>
            <form @submit.prevent="onSend" class="modal-invite__form">
              <input
                v-model="userInput"
                type="text"
                placeholder="Nom de l'utilisateur"
              />
              <button type="submit">Ajouter</button>
            </form>
          </div>
          <div @click="onCloseModalInvite" class="modal__background"></div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
