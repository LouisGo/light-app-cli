const env = process.env.NODE_ENV

// 接口基础地质，记得修改上线地址
export const BASEURL = (env === 'development') ?
  'localhost' :
  (env === 'production') ?
  'http://172.20.200.71:9002/dfpt' :
  'test'

// 请求超时时间
export const TIMEOUT = 10000

// 通用api方法默认设置
export const API_DEFAULT_CONFIG = {
  sep: '/',
  debug: true
}
