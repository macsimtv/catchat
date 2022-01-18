<template>
  <div class="header_z" @click="isOpen = !isOpen">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class="dropdown"
    >
      <path
        d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
      />
    </svg>
    <transition name="fade" appear>
      <div class="sub-menu" v-if="isOpen">
        <div v-for="(item, i) in items" :key="i" class="header__container">
          <p style="cursor: pointer" @click="logout">{{ item.title }} </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

defineProps({
  title: String,
  items: Object,
});

const isOpen = ref(false);
const router = useRouter();

function logout() {
  localStorage.clear();
  router.push("/login");
}
</script>
