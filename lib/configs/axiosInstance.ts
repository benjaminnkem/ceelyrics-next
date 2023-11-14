import axios from "axios";
import { MM_URL } from "../constants/variables";

export const publicApi = axios.create({
  baseURL: MM_URL,
  withCredentials: false,
  headers: { "Content-Type": "application/json" },
});
