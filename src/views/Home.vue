<script setup>
import Header from "../components/Header.vue";

import HomeUserList from "../components/section/HomeUserList.vue";
import HomeServerList from "../components/section/HomeServerList.vue";
</script>

<template>
  <Header />
  <main class="home">
    <div class="home__container">
<<<<<<< HEAD
      <HomeServerList />
      <div style="flex: 1">
        <!-- ChatBox -->
      </div>
      <HomeUserList />
=======
      <HomeServerList/>
      <section style="flex: 1;">
        <!-- ChatBox -->
      </section>
      <HomeUserList/>
>>>>>>> ea36eca6d5c81f7e571a984319e0f9db194b3db2
    </div>
  </main>
</template>
