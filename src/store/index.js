import { reactive } from "vue";

const store = reactive({
  channels: [],
  messages: [],
  currentChannel: {},
  loading: false,
  socket: {}
});

const setStateProp = (propName, newValue) => {
  store[propName] = newValue;
};
export default { state: store, setStateProp };
