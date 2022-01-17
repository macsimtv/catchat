import apiClient from "../http-common";
export default {
  //Auth
  login(form) {
    return apiClient.post("/login", form);
  },

  inscription(form) {
    return apiClient.post("/signin");
  },

  reconnection() {
    return apiClient.post("/msg/protected/extend_session'");
  },
};
