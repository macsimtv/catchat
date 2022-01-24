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

// defineProps: {
// input: {
//   type: Boolean,
//   default: Boolean,
// },
// // input value
// value: {
//   type: [String, Number],
//   default: null,
// },
// // return gif link with markdown format or html format
// gifFormat: {
//   type: String
// },
// // tenor.com API KEY
// key: {
//   type: String
// }
// }

function setEmoji(emoji) {
  console.log(emoji);
}

function setGif(gif) {
  console.log(gif);
}

const textInput = ref("");

<<<<<<< HEAD
const send = async () => {
=======
const send = async (e) => {
>>>>>>> 201f3d0c8f6674f21ecd645d227209516f9b6773
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
<<<<<<< HEAD
=======

onUpdated(() => {
  onScrollBottom();
})

const onScrollBottom = () => {
  let messageContainer = document.querySelector(".home-chatbox__container");
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

>>>>>>> 201f3d0c8f6674f21ecd645d227209516f9b6773
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
          showEmoji="false"
          :value="textInput"
          gif-format="md"
          @update:value="value = $event"
          @gif="setGif"
        />
      </div>
    </form>
  </section>
</template>
