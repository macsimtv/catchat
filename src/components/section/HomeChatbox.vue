<script setup>
import { ref, inject, onUpdated } from "vue";
import DiscordPicker from "vue3-discordpicker";
import MessagesService from "../../services/module/messages";

import Message from "../block/Message.vue";
import ServerBar from "../block/ServerBar.vue";

const { state, setStateProp } = inject("state");
const textInput = ref("");

defineProps({
  value: [String, Number],
  gifFormat: String,
  key: String,
});

onUpdated(() => {
  onScrollBottom();
});

function setEmoji(emoji) {
  textInput.value += emoji;
}

function setGif(gif) {
  gif = gif.substring(7);
  gif = gif.substring(0, gif.length - 1);
  send(false, gif);
}

const send = async (e, imageLink) => {
  let data = { Text: textInput.value };

  if (imageLink) data = { Image: imageLink };

  const isMessageSend = await MessagesService.sendMessage(
    state.currentChannel.id,
    data
  );

  if (isMessageSend) {
    textInput.value = "";
  } else {
    alert("le message ne s'est pas envoyer");
  }

  onScrollBottom();
};

const onScrollBottom = () => {
  let messageContainer = document.querySelector(".home-chatbox__container");
  messageContainer.scrollTop = messageContainer.scrollHeight;
};
</script>

<template>
  <section class="home-chatbox">
    <ServerBar />
    <div class="home-chatbox__container">
      <Message
        v-show="state.messages.length"
        v-for="(msg, index) in state.messages"
        :msg="msg"
        :key="index"
      />
      <p style="text-align: center" v-show="!state.messages.length">
        Il n'y a aucun message sur ce channel
      </p>
    </div>
    <form @submit.prevent="send">
      <div class="form-controle">
        <input placeholder="Aa" v-model="textInput" />
        <button type="submit">
          <img src="img/send.png" />
        </button>
        <discord-picker
          @update:value="value = $event"
          @emoji="setEmoji"
          @gif="setGif"
          gif-format="md"
          apiKey="34DXVAVB20QR"
        />
      </div>
    </form>
  </section>
</template>
