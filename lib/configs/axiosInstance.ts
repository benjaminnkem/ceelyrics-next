import axios from "axios";
import { BASE_API_URL, MM_URL } from "../constants";
import { getServerSession } from "next-auth";

export const musixApi = axios.create({
  baseURL: MM_URL,
  withCredentials: false,
  headers: { "Content-Type": "application/json" },
});

export const publicApi = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: false,
  headers: { "Content-Type": "application/json" },
});

export const authApi = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
