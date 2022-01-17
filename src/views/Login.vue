<script setup>
import { ref,router } from 'vue'
import  auth  from '../services/module/auth'

let username = ref("");
let password = ref("");

async function login(){
  const isConnected = await auth.login({username: username.value, password: password.value})
  if (isConnected){
    router.push('home')
  }
}
</script>

<template>
  <div class="login-page">
    <div class="login-page__container">
    <h1 class="login-page__title">Connectez-vous</h1>
      <div class="login-page__form">
        <form action="#" class="login-form">
          <input type="text" class="login-page__input" v-model="username" placeholder="Pseudo" />
          <input type="password" class="login-page__input" v-model="password" placeholder="Mot de passe" />
          <button type="submit" @click.prevent="login" class="login-page__button">Connexion</button>
        </form>
      </div>
    </div>
  </div>
</template>

