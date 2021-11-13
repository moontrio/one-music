import axios from 'axios';

let baseURL = '/api';

const request = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 15000,
});

request.interceptors.response.use(
  response => response?.data,
  error => Promise.reject(new Error(error)),
);

export default request;
