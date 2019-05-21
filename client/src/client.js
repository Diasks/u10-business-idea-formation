import axios from "../node_modules/axios";

const client = axios.create({
 baseURL: "http://localhost:4000",
 headers: {
   Authorization: {
     toString() {
       const token = localStorage.getItem("cool-jwt");
       return `Bearer ${token}`;
     }
   }
 }
});

export default client;