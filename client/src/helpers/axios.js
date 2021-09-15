import axios from "axios";

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL + '/api',
});

instance.interceptors.request.use(
	async (config) => {
		config.headers = {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin":"http://localhost"
		};
		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);

instance.defaults.withCredentials = true;

export default instance;