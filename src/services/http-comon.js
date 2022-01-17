import axios, { AxiosInstance } from "axios";
const apiClient = axios.create({
  baseURL: "https://edu.tardigrade.land/msg",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application-json",
  },
});

export default apiClient;
