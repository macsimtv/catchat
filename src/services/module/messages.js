import apiClient from "../http-comon";
export default {
  async listOfMessage(id, offset) {
    return await apiClient.get(`/protected/channel/${id}/messages/${offset}`, {
      headers: {
        authorization: "Bearer " + localStorage["token"],
      },
    });
  },

  async sendMessage(id, message) {
    return await apiClient.post(
      `/protected/channel/${id}/message`,
      {
        headers: {
          authorization: "Bearer " + localStorage["token"],
        },
      },
      message
    );
  },

  async moderateMessage(message) {
    return await apiClient.post(
      "/protected/channel/54/message/moderate",
      {
        headers: {
          authorization: "Bearer " + localStorage["token"],
        },
      },
      message
    );
  },
};
