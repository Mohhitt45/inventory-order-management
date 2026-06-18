import axios from "axios";

const api = axios.create({
  baseURL: "https://inventory-order-management-etq7.onrender.com/"
});

export default api;