<script setup>
import Header from '../components/Header.vue';

import HomeUserList from '../components/section/HomeUserList.vue';
import HomeServerList from '../components/section/HomeServerList.vue';
</script>

<template>
  <Header/>
  <main class="home">
    <div class="home__container">
      <HomeServerList/>
      <div style="flex: 1;">
        <!-- ChatBox -->
      </div>
      <HomeUserList/>
    </div>
  </main>
</template>