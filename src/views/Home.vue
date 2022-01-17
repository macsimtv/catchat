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
      <section style="flex: 1;">
        <!-- ChatBox -->
      </section>
      <HomeUserList/>
    </div>
  </main>
</template>