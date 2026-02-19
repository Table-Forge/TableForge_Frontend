import axios from "axios";
import * as SecureStore from "expo-secure-store";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const authDataSerialized = await SecureStore.getItemAsync("auth_data");

    if (authDataSerialized) {
      const { token } = JSON.parse(authDataSerialized);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    console.log(`[API] Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Sessão expirada ou não autorizado");
    }
    return Promise.reject(error);
  },
);

export { api };
