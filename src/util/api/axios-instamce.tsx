import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

export const GoogleBooksAxios = axios.create({
  baseURL: baseUrl,
});

GoogleBooksAxios.interceptors.request.use((config) => {
  config.params = { key: process.env.REACT_APP_API_KEY };
  return config;
});
