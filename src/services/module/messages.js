import apiClient from "../http-common";
export default {
  async listOfMessage(id, offset) {
    return apiClient.get(`/msg/protected/channel/${id}/messages/${offset}`, {
      headers: {
        authorization: "Bearer " + localStorage["token"],
      },
    });
  },

  async sendMessage(id, message) {
    return apiClient.post(
      `/msg/protected/channel/${id}/message`,
      {
        headers: {
          authorization: "Bearer " + localStorage["token"],
        },
      },
      message
    );
  },

  async moderateMessage(message) {
    return apiClient.post(
      "/msg/protected/channel/54/message/moderate",
      {
        headers: {
          authorization: "Bearer " + localStorage["token"],
        },
      },
      message
    );
  },
};
