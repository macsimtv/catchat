<script setup>
import Message from "../block/Message.vue";
import { ref } from "vue";
import DiscordPicker from "vue3-discordpicker";

function setEmoji(emoji) {
  console.log(emoji);
}

function setGif(gif) {
  console.log(gif);
}

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
  await fetch("https://edu.tardigrade.land/msg", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username.value,
      message: message.value,
    }),
  });

  message.value = "";
};
</script>

<template>
  <section class="home-chatbox">
    <div class="server-bar">
      <div class="server-bar__container">
        <h2 class="server-bar__title">Nom du server</h2>
        <div class="server-bar__menu">
          <button class="server-bar__settings">
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
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="home-chatbox__container">
      <Message v-for="(msg, index) in messages" :msg="msg" :key="index" />
    </div>
    <form @submit.prevent="send">
      <div class="form-controle">
        <input placeholder="Aa" v-model="message" />
        <button @click="send">
          <img src="img/send.png" />
        </button>
        <discord-picker
          :value="value"
          gif-format="md"
          @update:value="value = $event"
          @emoji="setEmoji"
          @gif="setGif"
        />
      </div>
    </form>
  </section>
</template>
