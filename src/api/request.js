import Axios from 'axios'
import { BASEURL as baseURL, TIMEOUT as timeout } from '../constants/api'

let instance = Axios.create()

instance.defaults.timeout = timeout
instance.defaults.baseURL = baseURL
// 请求拦截器
instance.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})
// 返回拦截器
instance.interceptors.response.use(response => {
  return response
}, err => {
  return Promise.reject(err)
})

export default instance
