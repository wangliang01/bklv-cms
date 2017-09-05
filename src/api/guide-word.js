import networkbase from '../common/networkbase'
import urlconfig from '../common/urlconfig.js'

//导游词模块
export default {
  data: {
    //导游词列表
    guideWordListURL: urlconfig.baseUrl + '/content/guide_words/mamagement',
    //导游词总条数
    guideWordCountURL: urlconfig.baseUrl + '/content/guide_words/count'

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
