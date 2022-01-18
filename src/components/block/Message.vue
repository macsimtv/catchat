<template>
    <div class="home-chatbox__message">
        <div class="home-chatbox__message-title">{{msg.author}}</div>
        <div class="home-chatbox__text">{{msg.content.Text}}</div>
    </div>
</template>

<script setup>
defineProps({
  msg: Object
})
</script>