import axios from 'axios';

const BASE_URL = " http://loacalhost:5014/api/v1";

const axiosInstance = axios.create();

axiosInstance.defaluts.baseURL = BASE_URL;
axiosInstance.defaluts.withCredentials = true;

export default axiosInstance;