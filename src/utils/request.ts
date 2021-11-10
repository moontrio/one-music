import axios from 'axios';

let baseURL = '/api';

const request = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 15000,
});

export default request;
