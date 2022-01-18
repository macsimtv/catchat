import apiClient from "../http-comon";
export default {
  //Auth
  async login(form) {
    const res = await apiClient.post("/login", form);
    if (res.status == 200){
      localStorage['token'] = res.data.token
      return true
    }
    return false
  },

  inscription(form) {
    return apiClient.post("/signin");
  },

  reconnection() {
    return apiClient.post("/msg/protected/extend_session'");
  },
};
