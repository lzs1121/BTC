import axios from "axios";

// create an axios instance
const service = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000 // request timeout
})

export default service