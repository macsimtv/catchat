import apiClient from "../http-common";
export default {
  //Items
  login(form) {
    return apiClient.post("/login", form);
  },

  inscription(form) {
    return apiClient.get("/signin");
  },
};
