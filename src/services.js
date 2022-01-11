import axios from "axios";

const instanceURL = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

export const api = {
  get(url) {
    return instanceURL.get(url);
  },
  post(url, body) {
    return instanceURL.post(url, body);
  },
};
