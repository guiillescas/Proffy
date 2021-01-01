import axios from 'axios'

const api = axios.create({
  baseURL: process.env.PROD_URL,
})

export default api