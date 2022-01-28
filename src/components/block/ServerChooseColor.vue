<template>
  <div class="server-choose-color">
    <h4 class="server-choose-color__title">Choisissez votre thème</h4>
  </div>
  <div class="server-color__container">
    <div>
      Normal
      <div
        @click="change(0)"
        class="server-color server-color__ring"
        :class="{ active: selected == 'normal' }"
      ></div>
    </div>
    <div>
      chocolat
      <div
        @click="change(1)"
        class="server-color server-color__ring theme--chocolate"
        :class="{ active: selected == 'chocolat' }"
      ></div>
    </div>
    <div>
      ocean
      <div
        @click="change(2)"
        class="server-color server-color__ring theme--ocean"
        :class="{ active: selected == 'ocean' }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref, computed } from "vue";

const props = defineProps({
  selectedTheme: {
    type: Object,
    default: {
      primary_color: "#35356c",
      primary_color_dark: "#35356c",
      accent_color: "#28264f",
      text_color: "#fff",
      accent_text_color: "#fff",
    },
  },
});
console.log(props);
const emits = defineEmits(["changeTheme"]);
const theme = ref([
  {
    primary_color: "#35356c",
    primary_color_dark: "#35356c",
    accent_color: "#28264f",
    text_color: "#fff",
    accent_text_color: "#fff",
  },
  {
    primary_color: "#63372C",
    primary_color_dark: "#63372C",
    accent_color: "#262322",
    text_color: "#fff",
    accent_text_color: "#fff",
  },
  {
    primary_color: "#1F7A8C",
    primary_color_dark: "#1F7A8C",
    accent_color: "#022B3A",
    text_color: "#fff",
    accent_text_color: "#fff",
  },
]);
const selected = computed(() => {
  if (props.selectedTheme?.primary_color == theme.value[0].primary_color) {
    return "normal";
  }

  if (props.selectedTheme?.primary_color == theme.value[1].primary_color) {
    return "chocolate";
  }
  if (props.selectedTheme?.primary_color == theme.value[2].primary_color) {
    return "ocean";
  }
});

const { state } = inject("state");

function change(id) {
  emits("changeTheme", theme.value[id]);
}
</script>
