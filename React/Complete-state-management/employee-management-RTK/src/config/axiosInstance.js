import axios from "axios";

const api = axios.create({
  baseURL: "https://6a172f351b90031f81b220f2.mockapi.io",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;