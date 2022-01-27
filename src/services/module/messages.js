import apiClient from "../http-comon";
export default {
  async getAll(id, offset) {
    return await apiClient.get(`/protected/channel/${id}/messages/${offset}`, {
      headers: {
        authorization: "Bearer " + localStorage["token"],
      },
    });
  },

  async sendMessage(id, message) {
    return await apiClient.post(
      `/protected/channel/${id}/message`,
      message,
      {
        headers: {
          authorization: "Bearer " + localStorage["token"],
        },
      }
    );
  },

  async moderateMessage(id, message) {
    return await apiClient.post(
      `/protected/channel/${id}/message/moderate`,
      message,
      {
        headers: {
          authorization: "Bearer " + localStorage["token"],
        },
      },
      
    );
  },
};
