import apiClient from "../http-comon";
export default {
  //Auth
  async login(form) {
    try {
      const res = await apiClient.post("/login", form);
      if (res.status == 200) {
        localStorage["token"] = res.data.token;
        localStorage["token_date"] = new Date().getTime();
        localStorage["username"] = form.username;
        return true;
      }
    } catch (err) {}

    return false;
  },

  reconnection() {
    return apiClient.post("/msg/protected/extend_session'");
  },
};
