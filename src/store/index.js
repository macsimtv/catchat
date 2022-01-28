import { reactive } from "vue";

const store = reactive({
  channels: [],
  messages: [],
  currentChannel: {},
  loading: false,
  socket: {},
  toggleUserList: false,
});

const setStateProp = (propName, newValue) => {
  store[propName] = newValue;
};
export default { state: store, setStateProp };
