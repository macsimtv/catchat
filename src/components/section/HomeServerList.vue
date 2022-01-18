<template>
    <section class="home-server-list">
        <div class="home-server-list__container">
            <ServerIcon v-for="(channel, index) in channels" :key="channel.id" :channel="channel" :index="index"/>
            <ServerAddIcon/>
        </div>
    </section>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import store from "../../store/index";

let channels = store.value.channels;

import ServerIcon from '../block/ServerIcon.vue';
import ServerAddIcon from '../block/ServerAddIcon.vue';

</script>