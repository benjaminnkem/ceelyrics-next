import axios from "axios";
import { BASE_API_URL } from "../constants";
import { getSession } from "next-auth/react";

export const publicApi = axios.create({
  baseURL: BASE_API_URL,
});

publicApi.defaults.headers["Content-Type"] = "application/json";

export const authApi = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
});

authApi.defaults.headers["Content-Type"] = "application/json";

authApi.interceptors.request.use(async (config) => {
  const session = await getSession();
  const token = session?.backendToken.accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
