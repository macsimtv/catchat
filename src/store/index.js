import { reactive } from "vue";

const store = reactive({
  channels: [],
  messages: [],
  currentChannel: {},
  loading: false,
});

export default store;
