<template>
  <div class="server-choose-color">
    <h1 class="server-choose-color__title">Choisissez votre thème</h1>
  </div>
  <div class="server-color__container">
    <div>
      primary Color
      <div v-for="color in colors" class="server-color__ring"></div>
    </div>
    <div>
      accent Color
      <div v-for="color in colors" class="server-color__ring"></div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";

const colors = ref([""]);
const selectedColors = ref({
  primary: "",
  accentColor: "",
  textColor: "",
  accentTextColor: "",
});
const { state } = inject("state");
</script>
