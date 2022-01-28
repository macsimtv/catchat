import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import GStore from "./store/index";
import { directive } from "./utils/vue-directive-clickOutside.js";
createApp(App)
  .provide("state", GStore)
  .directive("click-outside", directive)
  .use(router)
  .mount("#app");
