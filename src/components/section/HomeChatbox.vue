<script setup>
import Message from "../block/Message.vue";
import { ref, inject } from "vue";
const {state, setStateProp} = inject("state")
import DiscordPicker from "vue3-discordpicker";
import ServerBar from "../block/ServerBar.vue";
import msg from '../../services/module/messages'

function setEmoji(emoji) {
  console.log(emoji);
}

function setGif(gif) {
  console.log(gif);
}

const textInput = ref("")

// const message=ref('');
const messages = [
  {
    channel_id: 54,
    timestamp: 1641124598,
    author: "jsos10",
    content: {
      Text: "Je suis un message",
      Image: null,
    },
  },
  {
    channel_id: 13,
    timestamp: 1641124598,
    author: "mlecouturier",
    content: {
      Text: "Ceci est un message test",
      Image: null,
    },
  },
  {
    channel_id: 54,
    timestamp: 1641124598,
    author: "rbuisson",
    content: {
      Text: "Je suis un autre message",
      Image: null,
    },
  },
  {
    channel_id: 54,
    timestamp: 1641124598,
    author: "rbuisson",
    content: {
      Text: "Je suis un autre messageJe suis un autre messageJe suis un autre messageJe suis un autre messageJe suis un autre messageJe suis un autre messageJe suis un autre message",
      Image: null,
    },
  },
  {
    channel_id: 13,
    timestamp: 1641124598,
    author: "mlecouturier",
    content: {
      Text: "Yo comment tu vas ?",
      Image: null,
    },
  },
];

const send = async () => {
 const isMessageSend = await msg.sendMessage(state.currentChannel.id, {Text: textInput.value})
  if (isMessageSend){
    textInput.value = ""
  }else{
    alert('le message ne s\'est pas envoyer')
  }

};
</script>

<template>
  <section class="home-chatbox">
    <ServerBar/>
    <div class="home-chatbox__container">
      <Message v-for="(msg, index) in messages" :msg="msg" :key="index" />
    </div>
    <form @submit.prevent="send">
        <div class="form-controle">
          <input placeholder="Aa" v-model="textInput" />
          <button type="submit">
            <img src="img/send.png" />
          </button>
          <discord-picker
            :value="textInput"
            gif-format="md"
            @update:value="value = $event"
            @emoji="setEmoji"
            @gif="setGif"
          />
        </div>
      </form>
  </section>
</template>
