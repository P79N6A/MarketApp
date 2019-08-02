import axios from 'axios'
import { Toast } from '@ant-design/react-native'

const instance = axios.create({
  baseURL: 'https://www.iqiuxuan.com/market',
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
})

// 给实例绑定axios.all方法
instance.all = axios.all

// 请求拦截器
instance.interceptors.request.use(
  config => {
    return config
  },
  err => {
    Toast.fail('请求异常！')
    return Promise.reject(err)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  config => {
    return config.data
  },
  err => {
    // 401
    if (err.response.status === 401) {
      // cookie中的token失效处理，跳转登陆
    }
    Toast.fail(`请求异常！ ${err.response.status} ${err.response.statusText}`)
    return Promise.reject(err)
  }
)

const request = {
  post: (url, params) => {
    return instance
      .post(url, params)
      .then(res => {
        return res
      })
      .catch(err => {
        return err
      })
  },
  get: (url, params) => {
    return instance
      .get(url, { params })
      .then(res => {
        return res
      })
      .catch(err => {
        return err
      })
  }
}

export default request
