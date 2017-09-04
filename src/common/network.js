import networkbase from './networkbase'
import urlconfig from './urlconfig.js'

export default {
  data: {
    // 登录
    userLoginURL: urlconfig.baseUrl + '/user_info/login',
    //导游词模块
    //导游词列表
    guideWordListURL: urlconfig.baseUrl + '/content/guide_words/mamagement',
    //导游词总条数
    guideWordCountURL: urlconfig.baseUrl + '/content/guide_words/count'

  },

  //登录
  network_userLogin: function (params, callback) {
    networkbase.post_function(this.data.userLoginURL, params, {}, callback)
  },
  //导游词列表
  network_getGuideWordList: function(params, callback) {
    networkbase.get_function(this.data.guideWordListURL, params, {}, callback)
  },
  //导游词总条数
  network_getGuideWordCount: function(params, callback) {
    networkbase.get_function(this.data.guideWordCountURL, params, {}, callback)
  }
}
