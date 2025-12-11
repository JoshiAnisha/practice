import axios from "axios";

const API = axios.create({
  baseURL: "https://boringapi.com",
});

export const getRanran = () => {
  return API.get("/api/v1/photos/");
};
