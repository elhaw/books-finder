import axios from "axios";
const baseUrl = process.env.BASE_URL;
export const GoogleBooksAxios = axios.create({
  baseURL: baseUrl,
});
