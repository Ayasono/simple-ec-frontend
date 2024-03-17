import axios from "axios";

const axiosDefaults = {
	baseURL: "http://127.0.0.1:8080",
	timeout: 1000,
	credentials: "include",
	withCredentials: true,
}

const axiosInstance = axios.create(axiosDefaults);

export {axiosInstance}
