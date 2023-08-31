import axios from "axios";

axios.defaults.baseURL= 'https://pp5-bjj-api-2269f4220822.herokuapp.com/'
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

// Axios request with the above default custom values
export const axiosReq = axios.create();
export const axiosRes = axios.create();