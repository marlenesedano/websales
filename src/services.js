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
  put(url, body) {
    return instanceURL.put(url, body);
  },
  delete(url) {
    return instanceURL.delete(url);
  },
};

export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}
