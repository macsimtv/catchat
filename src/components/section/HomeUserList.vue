<template>
  <section class="home-user-list">
    <div class="home-user-list__container">
      <h3 class="home-user-list__title">Liste des utilisateurs</h3>
      <div class="home-user-list__list">
        <UserItem
          v-for="(user, index) in state.currentChannel.users"
          :key="index"
          :user="user"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, inject } from "vue";

import UserItem from "../block/UserItem.vue";

const { state } = inject("state");
</script>
