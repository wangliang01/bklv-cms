import Vue from 'vue';
import router from '../router';
import com from './common'
import axios from 'axios'

axios.defaults.withCredentials = true;

/*
 * http request 拦截器
 */
axios.interceptors.request.use(
  config => {
    if (com.getCookie('token')) {         // 请求时发送token
      config.headers.token = com.getCookie('token');
    }
    return config
  },
  err => {
    return Promise.reject(err)
  });


/*
 * http response 拦截器,统一处理所有http响应
 */
axios.interceptors.response.use(
  response => {
    if (!response.data) {                            // 请求失败
      Vue.prototype.$message.error('网络异常，请稍候重试!');
    } else {                                         // 请求成功
      if (response.config.url === '//up-z0.qiniu.com/') {
        // 七牛云回复
      } else {
        if (response.data.code !== 0) {       // code!=0

          if (response.data.code === 402) {      // token已过期，返回首页重新登录
            router.push({name: 'login'});
            Vue.prototype.$message.error('验证过期，请重新登录！');

          } else {
            Vue.prototype.$message.error(response.data.message);
          }

        } else {                             // code=0
          if (response.headers.token) {         // header中存在token，替换新token
            com.setCookie('token', response.headers.token);
          }
        }
      }
      return response;
    }
  },
  error => {
    return Promise.reject(error.response)   // 返回接口返回的错误信息
  });


function callbackFun(callback, res) {
  if (callback) {
    callback(res)
  }
}


export default {
  get_function: function (url, param, config, callback) {
    axios.get(url, {params: param}, config).then(function (response) {
      callbackFun(callback, response)
    }).catch(function (error) {
      console.error('error url:' + url + ' , \n error : ' + JSON.stringify(error))
      callbackFun(callback, error)
    })
  },
  post_function: function (url, param, config, callback) {
    axios.post(url, param, config).then(function (response) {
      callbackFun(callback, response)
    }).catch(function (error) {
      console.error('error url:' + url + ' , \n error : ' + JSON.stringify(error))
      // callbackFun(callback, error)
    })
  },

  put_function: function (url, param, config, callback) {
    axios.put(url, param, config).then(function (response) {
      callbackFun(callback, response)
    }).catch(function (error) {
      console.error(error)
      callbackFun(callback, error)
    })
  },

  delete_function: function (url, param, config, callback) {
    axios.delete(url, {params: param}, config).then(function (response) {
      callbackFun(callback, response)
    }).catch(function (error) {
      console.error(error)
      callbackFun(callback, error)
    })
  }
}
