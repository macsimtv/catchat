<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import auth from "../services/module/auth";

const router = useRouter();

let username = ref("");
let password = ref("");
let error = ref("");

async function login() {
  error.value = "";

  const isConnected = await auth.login({
    username: username.value,
    password: password.value,
  });
  if (isConnected) {
    router.push({ name: "Home" });
  }

  error.value = "Mauvaises informations de connexion";
}
</script>

<template>
  <div class="login-page">
    <div class="login-page__container">
      <h1 class="login-page__title">Connectez-vous</h1>
      <div class="login-page__form">
        <form action="#" class="login-form">
          <p style="color: red; margin-bottom: 10px" v-if="error">
            {{ error }}
          </p>
          <input
            type="text"
            class="login-page__input"
            v-model="username"
            placeholder="Pseudo"
          />
          <input
            autocomplete
            type="password"
            class="login-page__input"
            v-model="password"
            placeholder="Mot de passe"
          />
          <button
            type="submit"
            @click.prevent="login"
            class="login-page__button"
          >
            Connexion
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
