import request from './api/request'
import api from './api'

export default {
    install: (Vue, options) => {
        Vue.prototype.$api = api
        Vue.prototype.$ajax = request
    }
}