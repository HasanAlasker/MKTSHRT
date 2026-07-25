import axios from "axios";

const apiClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// apiClient.interceptors.request.use((config) => {
//   const token = useAuthStore.getState().token;
//   if (token) config.headers["x-auth-token"] = token;
//   return config;
// });

export default apiClient;
