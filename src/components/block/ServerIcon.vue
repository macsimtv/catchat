<template>
  <div
    @mouseenter="toggleServerName($event, channel.name)"
    @mouseleave="toggleServerName($event, channel.name)"
    :data-channel-id="channel.id"
    class="server-icon"
  >
    <div
      class="server-icon__container"
      :class="state.currentChannel.id == channel.id ? 'active' : ''"
    >
      <img class="server-icon__picture" :src="channel.img" alt="Serveur Icon" />
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
const { state, setStateProp } = inject("state");

defineProps({
  channel: Object,
  index: Number,
});

let isActive = ref(false);

function toggleServerName(e, name) {
  let serverName = document.querySelector('.server-name');
  serverName.innerHTML = name;

  let size = {
      width: e.target.offsetWidth,
      height: e.target.offsetHeight,
  }

  let position = {
      x: e.target.offsetLeft,
      y: e.target.offsetTop
  }

  let offset = 15;

  serverName.style.top = (position.y + ( size.height / 2)) + 'px';
  serverName.style.left = (position.x + ( size.width + offset )) + 'px';

    console.log(position, size);

  serverName.classList.toggle('active');
}
</script>
