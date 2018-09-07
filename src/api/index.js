import request from './request'
import API_MAP from './apiMap'
import { API_DEFAULT_CONFIG } from '../constants/api'

import _pick from 'lodash/pick'
import _assign from 'lodash/assign'
import _isEmpty from 'lodash/isEmpty'

class MakeApi {
  constructor(options) {
    this.api = {}
    this.apiBuilder(options)
  }

  apiBuilder({
    config = {},
    sep = '/',
    debug = false
  }) {
    debug && console.warn('debug模式开启，下面是所有调用的接口信息，可展开查看：')
    Object.keys(config).map(namespace => {
      this._apiSingleBuilder({
        namespace,
        sep,
        debug,
        config: config[namespace]
      })
    })
  }

  _apiSingleBuilder({
    namespace,
    sep = '/',
    debug = false,
    config = {}
  }) {
    config.forEach(api => {
      let {name, params, method, url, desc} = api
      let apiname = `${namespace}${sep}${name}`// 命名空间

      if (debug) {
        console.groupCollapsed(`${apiname}`)
        console.info(
        `原始接口：${url}\n分发接口：${apiname}\n接口类型：${method}\n接口描述：${desc}`)
        console.groupEnd()
      }

      Object.defineProperty(this.api, `${namespace}${sep}${name}`, {
        value(outerParams, outerOptions) {
          // 请求参数自动截取。
          // 请求参数不穿则发送默认配置参数。
          let _data = _isEmpty(outerParams) ? params : _pick(_assign({}, params, outerParams), Object.keys(params))
          return request(_normoalize(_assign({
              url,
              method
          }, outerOptions), _data))
        }
      })
    })
  }
}

function _normoalize(options, data) {
  // 这里可以做大小写转换，也可以做其他类型 RESTFUl 的兼容
  if (options.method.toUpperCase() === 'POST') {
    options.data = data
  } else if (options.method.toUpperCase() === 'GET') {
    options.params = data
  }
  return options
}

export default new MakeApi({
  config: API_MAP,
  ...API_DEFAULT_CONFIG
})['api']
