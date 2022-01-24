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
<<<<<<< HEAD
  textInput.value += emoji;
}

function setGif(gif) {
  textInput.value += gif;
=======
  textInput.value += emoji
}

function setGif(gif) {
  gif = gif.substring(7)
  gif = gif.substring(0, gif.length - 1)
  send(false, gif)
>>>>>>> a0ed4ce4c107831f0e26a739f4bb1e800c12e0e6
}

const textInput = ref("");

const send = async (e, imageLink) => {
  let data = { Text: textInput.value }
  if (imageLink){
    data = {Image: imageLink}
  }
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
<<<<<<< HEAD
          :value="textInput"
          apiKey="34DXVAVB20QR"
          @update:value="value = $event"
          @emoji="setEmoji"
          gif-format="md"
          @gif="setGif"
        />
        <!-- <discord-picker
          apiKey="34DXVAVB20QR"
          :value="textInput"
          gif-format="md"
          @update:value="value = $event"
          @gif="setGif"
        /> -->
=======
          @update:value="value = $event"
          @emoji="setEmoji"
          @gif="setGif"
          gif-format="md"
          apiKey="34DXVAVB20QR"
        />
>>>>>>> a0ed4ce4c107831f0e26a739f4bb1e800c12e0e6
      </div>
    </form>
  </section>
</template>
