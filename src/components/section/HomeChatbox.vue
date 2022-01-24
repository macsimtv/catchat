<script setup>
import Message from "../block/Message.vue";
import { ref, inject, onUpdated } from "vue";
const { state, setStateProp } = inject("state");
import DiscordPicker from "vue3-discordpicker";
import MessagesService from "../../services/module/messages";
import ServerBar from "../block/ServerBar.vue";

defineProps({
  value: [String, Number],
  gifFormat: String,
  key: String,
});

function setEmoji(emoji) {
  console.log(emoji);
}

function setGif(gif) {
  textInput.value += gif;
  console.log(gif);
}

const textInput = ref("");

const send = async (e) => {
  const isMessageSend = await MessagesService.sendMessage(
    state.currentChannel.id,
    { Text: textInput.value }
  );
  if (isMessageSend) {
    textInput.value = "";
  } else {
    alert("le message ne s'est pas envoyer");
  }

  onScrollBottom();
};

onUpdated(() => {
  onScrollBottom();
});

const onScrollBottom = () => {
  let messageContainer = document.querySelector(".home-chatbox__container");
  messageContainer.scrollTop = messageContainer.scrollHeight;
};
</script>

<template>
  <section class="home-chatbox">
    <ServerBar />
    <div class="home-chatbox__container">
      <Message v-for="(msg, index) in state.messages" :msg="msg" :key="index" />
    </div>
    <form @submit.prevent="send">
      <div class="form-controle">
        <input placeholder="Aa" v-model="textInput" />
        <button type="submit">
          <img src="img/send.png" />
        </button>
        <discord-picker
          :value="textInput"
          @update:value="value = $event"
          @emoji="setEmoji"
        />
        <discord-picker
          apiKey="34DXVAVB20QR"
          :value="textInput"
          gif-format="md"
          @update:value="value = $event"
          @gif="setGif"
        />
      </div>
    </form>
  </section>
</template>
