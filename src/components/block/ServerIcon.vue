<template>
    <div :class="index == 0 ? 'active' : ''" :data-channel-id="channel.id" class="server-icon" :title="channel.name">
        <div class="server-icon__container">
            <img class="server-icon__picture" :src="channel.img" alt="Serveur Icon">
        </div>
    </div>
</template>

<script setup>

import { defineProps } from "vue";

defineProps({
    channel: Object,
    index: Number,
});

</script>