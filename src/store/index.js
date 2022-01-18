import { ref } from "vue";

const store = ref({
  channels: [],
  messages: [],
  currentChannel: {},
  loading: false,
});

export default store;
