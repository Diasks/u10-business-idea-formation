import axios from "../node_modules/axios";

const isDev = process.env.NODE_ENV === "development";
const baseURL = isDev ? "http://localhost:4000/api" : "/api";

export default axios.create({
  baseURL,
  headers: {
    Authorization: {
      toString() {
        const token = localStorage.getItem("cool-jwt");
        return `Bearer ${token}`;
      }
    }
  }
});
