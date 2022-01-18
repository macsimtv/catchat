import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import GStore from "./store/index";
createApp(App).provide("state", GStore).use(router).mount("#app");
