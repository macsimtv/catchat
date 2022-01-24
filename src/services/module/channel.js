import apiClient from "../http-comon";
export default {
  async listOfChannel() {
    return await apiClient.get(`/protected/user/channels`, {
      headers: {
        authorization: "Bearer " + localStorage["token"],
      },
    });
  },

  async createChannel(channel) {
    return await apiClient.put(`/protected/channel`, channel, {
      headers: {
        authorization: "Bearer " + localStorage["token"],
      },
    });
  },

  async updateMetaChannel(id, channel) {
    return await apiClient.get(
      `/protected/channel/${id}/update_metadata`,
      {
        headers: {
          authorization: "Bearer " + localStorage["token"],
        },
      },
      channel
    );
  },

  async deleteChannel(idChannel) {
    return await apiClient.delete(`/protected/channel/${idChannel}`, {
      headers: {
        authorization: "Bearer " + localStorage["token"],
      },
    });
  },
  async banUserFromChannel(idChannel, username) {
    return await apiClient.delete(
      `/msg/protected/channel/${idChannel}/user/${username}'`,
      {
        headers: {
          authorization: "Bearer " + localStorage["token"],
        },
      }
    );
  },

  async addUserInAChannel(idChannel, username) {
    return await apiClient.put(
      `/protected/channel/${idChannel}/user/${username}/`,
      {
        headers: {
          authorization: "Bearer " + localStorage["token"],
        },
      }
    );
  },
};
