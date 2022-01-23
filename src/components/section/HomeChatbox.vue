<script setup>
import Message from "../block/Message.vue";

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
    <div class="home-chatbox__container">
      <Message v-for="(msg, index) in messages" :msg="msg" :key="index" />
      <form>
        <div class="form-controle">
          <input placeholder="Aa" v-model="message" />
        </div>
      </form>
    </div>
  </section>
</template>
