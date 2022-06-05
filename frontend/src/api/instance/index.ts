import axios, { AxiosInstance } from "axios";

const APP_BASE_URI = "http://localhost:3000";

function create(url: string, options = {}): AxiosInstance {
  const instance = axios.create(Object.assign({ baseURL: url }, options));
  return instance;
}

export const webtoon = create(APP_BASE_URI);
