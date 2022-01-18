<script setup>
import { RouterLink } from "vue-router";
import Dropdown from "./Dropdown.vue";

const services = [{
          title: "Déconnexion",
          link: "/src/views/Login.vue",
        }];
</script>


<template>
  <header class="header">
    <div class="header__container">
      <RouterLink to="/">
        <img src="img/Logo_chat3.svg" class="logo" />
      </RouterLink>
      <Dropdown title="Services" :items="services" />
    </div>
  </header>
</template>

