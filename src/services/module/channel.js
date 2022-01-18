import apiClient from "../http-common";
export default {
  async listOfChannel() {
    return apiClient.get(`/msg/protected/user/channels`, {
      headers: {
        authorization: "Bearer " + localStorage["token"],
      },
    });
  },

  async createChannel(channel) {
    return apiClient.post(
      `/msg/protected/channel`,
      {
        headers: {
          authorization: "Bearer " + localStorage["token"],
        },
      },
      channel
    );
  },

  async updateMetaChannel(id, channel) {
    return apiClient.get(
      `/msg/protected/channel/${id}/update_metadata`,
      {
        headers: {
          authorization: "Bearer " + localStorage["token"],
        },
      },
      channel
    );
  },
  async banUserFromChannel(idChannel, username, channel) {
    return apiClient.delete(
      `/msg/protected/channel/${idChannel}/user/${username}'`,
      {
        headers: {
          authorization: "Bearer " + localStorage["token"],
        },
      },
      channel
    );
  },
};
