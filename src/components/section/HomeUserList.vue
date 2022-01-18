<template>
    <section class="home-user-list">
        <div class="home-user-list__container">
            <h3 class="home-user-list__title">
                Liste des utilisateurs
            </h3>
            <div class="home-user-list__list">
                <UserItem/>
                <UserItem/>
                <UserItem/>
                <UserItem/>
            </div>
        </div>
    </section>
</template>

<script setup>

import UserItem from '../block/UserItem.vue';

</script>