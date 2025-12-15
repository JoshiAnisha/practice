import axios from "axios";

const API = axios.create({
  baseURL: "https://boringapi.com", 
});
const API2 = axios.create({
  baseURL: "https://dogapi.dog",
});


export const getRanran = () => {
  return API.get("/api/v1/photos");
};
export const getViewView = () => {
  return API2.get("/api/v2/breeds");
}
