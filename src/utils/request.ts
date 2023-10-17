import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 99999
})

export default service
