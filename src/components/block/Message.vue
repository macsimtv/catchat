<template>
    <div :class="{'home-chatbox__message': true, 'home-chatbox__message--me': (msg.author == username) }">
      <div :class="{'home-chatbox__title': true, 'home-chatbox__title--me': (msg.author == username) }">
        <div :class="{'home-chatbox__profil': true, 'home-chatbox__profil--me': (msg.author == username) }">RB</div>
        <div :class="{'home-chatbox__message-title': true, 'home-chatbox__message-title--me': (msg.author == username) }">{{msg.author}}</div>
      </div>
      <div :class="{'home-chatbox__text': true, 'home-chatbox__text--me': (msg.author == username) }">{{msg.content.Text}}</div>
    </div>
</template>

<script setup>
defineProps({
  msg: Object
})

const username = localStorage['username']
</script>