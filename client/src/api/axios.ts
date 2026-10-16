import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_APi_BASE_URL || "https://socialflow-2.onrender.com"
})

export default api;