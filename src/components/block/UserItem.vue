<script setup>

import { inject } from 'vue';

const { state, setStateProp } = inject('state');

defineProps({
  user: String,
});
</script>

<template>
  <div class="user-item">
    <div class="user-item__container">
      <div v-if="true" class="user-item__profil">
        {{ user.substring(0, 2).toUpperCase() }}
      </div>
      <div v-else class="user-item__picture">
        <img src="" alt="coucou" />
      </div>
      <p class="user-item__username">{{ user }}</p>
      <div v-if="user == state.currentChannel.creator" class="user-item__owner">
        👑
      </div>
    </div>
  </div>
</template>
