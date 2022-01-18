import axios, { AxiosInstance } from "axios";
const apiClient = axios.create({
  baseURL: "https://edu.tardigrade.land/msg",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
