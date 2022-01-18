import { ref } from "vue";

const store = ref({
  channels: [],
  messages: [],
  currentChannel: {},
});

export default store;
