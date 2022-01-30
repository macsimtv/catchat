import { reactive } from "vue";

const store = reactive({
  channels: [],
  messages: [],
  currentChannel: {},
  loading: false,
  socket: {},
  toggleUserList: false,
  theme: [
    {
      primary_color: "#35356c",
      primary_color_dark: "#35356c",
      accent_color: "#28264f",
      text_color: "#fff",
      accent_text_color: "#fff",
    },
    {
      primary_color: "#63372C",
      primary_color_dark: "#63372C",
      accent_color: "#262322",
      text_color: "#fff",
      accent_text_color: "#fff",
    },
    {
      primary_color: "#1F7A8C",
      primary_color_dark: "#1F7A8C",
      accent_color: "#022B3A",
      text_color: "#fff",
      accent_text_color: "#fff",
    },
  ],
});

const setStateProp = (propName, newValue) => {
  store[propName] = newValue;
};
export default { state: store, setStateProp };
