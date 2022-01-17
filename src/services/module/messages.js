import apiClient from "../http-common";
export default {
  async listOfMessage(id, offset) {
    return apiClient.get(`/msg/protected/channel/${id}/messages/${offset}`);
  },

  async sendMessage(id, message) {
    return apiClient.post(`/msg/protected/channel/${id}/message`, message);
  },

  async moderateMessage() {
    return apiClient.post("/msg/protected/channel/54/message/moderate");
  },
};
