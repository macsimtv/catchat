<template>
  <div class="server-choose-color">
    <h4 class="server-choose-color__title">Choisissez votre thème</h4>
  </div>
  <div class="server-color__container">
    <div>
      Normal
      <div
        @click="selected = 'normal'"
        class="server-color server-color__ring"
        :class="{ active: selected == 'normal' }"
      ></div>
    </div>
    <div>
      chocolat
      <div
        @click="selected = 'chocolat'"
        class="server-color server-color__ring theme--chocolate"
        :class="{ active: selected == 'chocolat' }"
      ></div>
    </div>
    <div>
      ocean
      <div
        @click="selected = 'ocean'"
        class="server-color server-color__ring theme--ocean"
        :class="{ active: selected == 'ocean' }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";

const props = defineProps({
  selectedColors: Object,
});
const theme = ref([{}, {}]);
const selected = ref("normal");

const { state } = inject("state");
</script>
