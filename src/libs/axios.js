import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getFetcher = (resource, init) =>
  axiosInstance.get(resource, init).then((res) => res.data);

export default axiosInstance;
