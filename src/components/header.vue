<template>
  <header class="header">
    <div class="header__container">
      <router-link to="/">
        <img src="img/Logo_chat3.svg" class="logo" />
      </router-link>
      <Dropdown title="Services" :items="services" />
    </div>
  </header>
</template>

<script>
import Dropdown from "./Dropdown.vue";

export default {
  name: "navbar",
  components: {
    Dropdown,
  },
  data() {
    return {
      services: [
        {
          title: "Déconnexion",
          link: "/src/views/Login.vue",
        },
      ],
    };
  },
};
</script>
