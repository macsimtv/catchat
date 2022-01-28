<template>
  <section
    class="home-user-list"
    :class="{ active: state.toggleUserList }"
    @keydown.esc="onClose"
    tabindex="0"
    ref="userList"
  >
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
import { onMounted, computed, inject, ref } from "vue";

import UserItem from "../block/UserItem.vue";

const { state, setStateProp } = inject("state");

const isOpen = ref(false);
const userList = ref("");
function onClose() {
  setStateProp("toggleUserList", false);
}
/* 
function onOpenUserList() {
  isOpen.value = true;
} */

onMounted(() => {
  userList.value.focus();
});
</script>
