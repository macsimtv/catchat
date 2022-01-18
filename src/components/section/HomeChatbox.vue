<script setup>

import Message from "../block/Message.vue"

const messages = [{
    "channel_id": 54,
    "timestamp": 1641124598,
    "author": "jsos10",
    "content": {
      "Text": "Je suis un message",
      "Image": null
    }
  },
  {
    "channel_id": 54,
    "timestamp": 1641124598,
    "author": "jsos10",
    "content": {
      "Text": "Je suis un autre message",
      "Image": null
    }
  }]
</script>

<template>
    <section class="home-chatbox">
        <div class="home-chatbox__container">
            <Message v-for="msg in messages" :msg="msg" />
        </div>
    </section>
</template>

