<template>
  <div class="server-choose-color">
    <h1 class="server-choose-color__title">Choisissez votre thème</h1>
  </div>
  <div
    class="server-color__container"
    :class="state.currentChannel.id == channel.id ? 'active' : ''"
  ></div>
</template>

<script setup></script>
