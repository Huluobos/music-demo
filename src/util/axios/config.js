import axios from 'axios'
axios.defaults.withCredentials=true;//让ajax携带cookie
var instance = axios.create({
  baseURL: 'http://119.3.216.3:8002',
  // baseURL: 'http://localhost:3000',
  timeout: 15000,
})

export default instance;
