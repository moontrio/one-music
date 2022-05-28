import axios from 'axios'

const baseURL = '/api'
const REAL_IP = '211.161.244.70'

const request = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 15000,
})

request.interceptors.request.use((config) => {
  if (!config.params) config.params = {}
  config.params.realIP = REAL_IP

  if (!config.headers) config.headers = {}
  config.headers['X-Real-IP'] = REAL_IP

  return config
})

request.interceptors.response.use(
  response => response?.data,
  error => Promise.reject(new Error(error)),
)

export default request
