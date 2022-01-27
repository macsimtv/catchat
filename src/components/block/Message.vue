<script setup>
import { format, render, cancel, register } from "timeago.js";
import { inject, ref } from "vue";
const { state, setStateProp } = inject("state");
import serviceMessage from "../../services/module/messages";

const props = defineProps({
  msg: Object,
});

const localeFunc = (number, index, totalSec) => {
  return [
    ["à l'instant", "à l'instant"],
    ["%s secondes", "dans %s secondes"],
    ["1 minute", "dans 1 minute"],
    ["%s minutes", "dans %s minutes"],
    ["1 heure", "dans 1 heure"],
    ["%s heures", "dans %s heures"],
    ["1 jour", "dans 1 jour"],
    ["%s jours", "dans %s jours"],
    ["1 semaine", "dans 1 semaine"],
    ["%s semaines", "dans %s semaines"],
    ["1 mois", "dans 1 mois"],
    ["%s mois", "dans %s mois"],
    ["1 an", "dans 1 an"],
    ["%s ans", "dans %s ans"],
  ][index];
};

register("fr", localeFunc);

const username = localStorage["username"];

const isModalOpen = ref(false);
const userInput = ref(props.msg.content.Text || props.msg.content.Image);

function onDoubleClick() {
  if(state.currentChannel.creator != username) return;
  isModalOpen.value = !isModalOpen.value;
}

function onCloseModal() {
  isModalOpen.value = !isModalOpen.value;
}

async function onUpdate() {
  if(state.currentChannel.creator != username) return;

  let messageContent = props.msg;
  if (props.msg.content.Text) {
    props.msg.content.Text = userInput.value;
  }
  if (props.msg.content.Image) {
    props.msg.content.Image = userInput.value;
  }

  const message = await serviceMessage.moderateMessage(
    state.currentChannel.id,
    messageContent
  );
  onCloseModal();
}
</script>

<template>
  <div
    :class="{
      'home-chatbox__message': true,
      'home-chatbox__message--me': msg.author == username,
      'home-chatbox__message--clickable':
        state.currentChannel.creator == username,
    }"
    @dblclick="onDoubleClick"
    @closeModalMessage="onCloseModal"
  >
    <div
      :class="{
        'home-chatbox__title': true,
        'home-chatbox__title--me': msg.author == username,
      }"
    >
      <div
        :class="{
          'home-chatbox__title-without-date': true,
          'home-chatbox__title-without-date--me': msg.author == username,
        }"
      >
        <div
          :class="{
            'home-chatbox__profil': true,
            'home-chatbox__profil--me': msg.author == username,
          }"
        >
          {{ msg.author.substring(0, 2).toUpperCase() }}
        </div>
        <div
          :class="{
            'home-chatbox__message-title': true,
            'home-chatbox__message-title--me': msg.author == username,
          }"
        >
          {{ msg.author }}
        </div>
      </div>
      <div
        class="home-chatbox__message-date"
        :class="{
          'home-chatbox__message-date': true,
          'home-chatbox__message-date--me': msg.author == username,
        }"
      >
        {{ format(msg.timestamp, "fr") }}
      </div>
    </div>

    <div
      v-if="!msg.content.Image"
      :class="{
        'home-chatbox__text': true,
        'home-chatbox__text--me': msg.author == username,
      }"
    >
      {{ msg.content.Text }}
    </div>
    <div v-else>
      <img :src="msg.content.Image" alt="" />
    </div>
    <teleport to="body">
      <transition name="fade">
        <div v-if="isModalOpen" class="modal-invite">
          <div class="modal-invite__container">
            <div class="modal-invite__body">
              <h2 class="modal-invite__title">Modification du message</h2>
              <form @submit.prevent="onUpdate" class="modal-invite__form">
                <input
                  v-model="userInput"
                  type="text"
                  placeholder="Contenu du message"
                />
                <button type="submit">Modifier</button>
              </form>
            </div>
            <div @click="onCloseModal" class="modal__background"></div>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>
