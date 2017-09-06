import networkbase from './networkbase'
import urlconfig from './urlconfig.js'

export default {
  data: {
    // 登录
    userLoginURL: urlconfig.baseUrl + '/user_info/login',
  },

  //登录
  network_userLogin: function (params, callback) {
    networkbase.post_function(this.data.userLoginURL, params, {}, callback)
  }

}
