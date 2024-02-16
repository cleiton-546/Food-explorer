import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-food-bdb2.onrender.com",
  withCredentials: true,
});
