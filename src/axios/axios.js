import axios from "axios";

// const BASE_URL = "https://maa-foundation-backend-6.onrender.com/api";
const BASE_URL = "http://localhost:5001/api"

const axiosInstance = axios.create({
    baseURL:BASE_URL,
});


export default axiosInstance;