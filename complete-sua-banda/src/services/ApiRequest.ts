import axios from "axios";

export const api = axios.create({
  baseURL: "https://csbanda.herokuapp.com",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});
