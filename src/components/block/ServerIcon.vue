<template>
    <div :class="state.currentChannel.id == channel.id ? 'active' : ''" :data-channel-id="channel.id" class="server-icon" :title="channel.name">
        <div class="server-icon__container">
            <img class="server-icon__picture" :src="channel.img" alt="Serveur Icon">
        </div>
    </div>
</template>

<script setup>
import { inject } from "vue";
const { state, setStateProp } = inject("state");

defineProps({
    channel: Object,
    index: Number,
});

</script>