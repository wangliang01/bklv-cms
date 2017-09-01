import networkbase from './networkbase'
import urlconfig from './urlconfig.js'

export default {
  data: {
    // 登录
    userLoginURL: urlconfig.baseUrl + '/user_info/login',
    // 获取用户列表
    usersListURL: urlconfig.baseUrl + '/user_info',
    // 获取公众号列表
    wechatListURL: urlconfig.baseUrl + '/official_account',
    // 获取用户信息
    userInfoURL: urlconfig.baseUrl + '/user_info/',
    // 新建账号
    addUserURL: urlconfig.baseUrl + '/user_info',
    // 修改账号
    editUserURL: urlconfig.baseUrl + '/user_info/',
    // 删除用户
    deleteUserURL: urlconfig.baseUrl + '/user_info/',
    // 上传文件或图片
    uploadURL: urlconfig.baseUrl + '/file_upload_token',
    // 七牛云
    qiniuyunURL: '//up-z0.qiniu.com/',
    // 获取回复(文字、图片、被关注)
    getReplyInfoURL: urlconfig.baseUrl + '/official_reply',
    // 提交回复(文字、图片、被关注)
    submitReplyURL: urlconfig.baseUrl + '/official_reply',
    // 搜索关键词
    searchKeywordsURL: urlconfig.baseUrl + '/key_words_rule/search/',
    // 获取关键词列表
    getKwListURL: urlconfig.baseUrl + '/key_words_rule',
    // 查看关键词规则
    showKeywordsURL: urlconfig.baseUrl + '/key_words_rule/',
    // 新增关键词
    addKeywordsURL: urlconfig.baseUrl + '/key_words_rule',
    // 修改关键词
    editKeywordsURL: urlconfig.baseUrl + '/key_words_rule/',
    // 删除关键词
    deleteKeywordsURL: urlconfig.baseUrl + '/key_words_rule/',
    // 获取菜单
    getMenuURL: urlconfig.baseUrl + '/button_manager',
    // 获取用户标签
    getUsersTagURL: urlconfig.baseUrl + '/user_tag_list',
    // 新建个性化菜单
    addMenuURL: urlconfig.baseUrl + '/button_manager',
    // 删除个性化菜单
    deleteMenuURL: urlconfig.baseUrl + '/button_manager/',
    // 更新个性化菜单
    updateMenuURL: urlconfig.baseUrl + '/button_manager/',
    // 获取主菜单信息
    getMenuInfoURL: urlconfig.baseUrl + '/sub_button/',
    // 新建主菜单信息
    addMenuInfoURL: urlconfig.baseUrl + '/sub_button',
    // 编辑主菜单信息
    editMenuInfoURL: urlconfig.baseUrl + '/sub_button/',
    // 删除主菜单信息
    deleteMainMenuURL: urlconfig.baseUrl + '/sub_button/',
    // 获取子菜单列表
    getSubMenuURL: urlconfig.baseUrl + '/sub_button',
//获取小程序?????????????????
    getAppURL: urlconfig.baseUrl + '/',
    // 获取素材列表
    getSourceListURL: urlconfig.baseUrl + '/material',
    // 新增素材
    addSourceURL: urlconfig.baseUrl + '/material',
    // 修改素材名称
    editSourceNameURL: urlconfig.baseUrl + '/material/',
    // 删除素材
    deleteSourceURL: urlconfig.baseUrl + '/material',
    // 更新素材
    updateSourceURL: urlconfig.baseUrl + '/material/',
    // 获取素材信息
    getSourceInfoURL: urlconfig.baseUrl + '/material/',
    // 获取场景列表
    getSceneListURL: urlconfig.baseUrl + '/scene',
    // 获取场景信息
    getSceneInfoURL: urlconfig.baseUrl + '/scene/',
    // 新建场景信息
    addSceneInfoURL: urlconfig.baseUrl + '/scene',
    // 更新场景信息
    updateSceneInfoURL: urlconfig.baseUrl + '/scene/',
    // 删除场景
    deleteSceneURL: urlconfig.baseUrl + '/scene/',
    // 场景统计
    sceneStatisticURL: urlconfig.baseUrl + '/scene/',
  },


  //登录
  network_userLogin: function (params, callback) {
    networkbase.post_function(this.data.userLoginURL, params, {}, callback)
  },
  // 获取用户列表
  network_getUsersList: function (callback) {
    networkbase.get_function(this.data.usersListURL, {}, {}, callback)
  },
  // 获取公众号列表
  network_wechatList: function (callback) {
    networkbase.get_function(this.data.wechatListURL, {}, {}, callback)
  },
  // 获取用户信息
  network_getUserInfo: function (uid, callback) {
    networkbase.get_function(this.data.userInfoURL + uid, {}, {}, callback)
  },
  // 新建用户
  network_addUser: function (params, callback) {
    networkbase.post_function(this.data.addUserURL, params, {}, callback)
  },
  // 修改用户
  network_editUser: function (uid, params, callback) {
    networkbase.put_function(this.data.editUserURL + uid, params, {}, callback)
  },
  // 删除用户
  network_deleteUser: function (id, callback) {
    networkbase.delete_function(this.data.deleteUserURL + id, {}, {}, callback)
  },
  // 上传文件或图片
  network_upload: function (params, callback) {
    networkbase.post_function(this.data.uploadURL, params, {}, callback)
  },
  // 获取回复(文字、图片、被关注)
  network_getReplyInfo: function (params, callback) {
    networkbase.get_function(this.data.getReplyInfoURL, params, {}, callback)
  },
  // 提交回复(文字、图片、被关注)
  network_submitReply: function (params, callback) {
    networkbase.post_function(this.data.submitReplyURL, params, {}, callback)
  },
  // 搜索关键词
  network_searchKeywords: function (key_word, params, callback) {
    networkbase.get_function(this.data.searchKeywordsURL + key_word, params, {}, callback)
  },
  // 获取关键词列表
  network_getKwList: function (params, callback) {
    networkbase.get_function(this.data.getKwListURL, params, {}, callback)
  },
  // 查看关键词规则
  network_showKeywords: function (id, callback) {
    networkbase.get_function(this.data.showKeywordsURL + id, {}, {}, callback)
  },
  // 新增关键词
  network_addKeywords: function (params, callback) {
    networkbase.post_function(this.data.addKeywordsURL, params, {}, callback)
  },
  // 编辑关键词
  network_editKeywords: function (id, params, callback) {
    networkbase.put_function(this.data.editKeywordsURL + id, params, {}, callback)
  },
  // 删除用户
  network_deleteKeywords: function (id, callback) {
    networkbase.delete_function(this.data.deleteKeywordsURL + id, {}, {}, callback)
  },
  // 获取菜单
  network_getMenu: function (params, callback) {
    networkbase.get_function(this.data.getMenuURL, params, {}, callback)
  },
  // 获取用户标签
  network_getUsersTag: function (params, callback) {
    networkbase.get_function(this.data.getUsersTagURL, params, {}, callback)
  },
  // 新建个性化菜单
  network_addMenu: function (params, callback) {
    networkbase.post_function(this.data.addMenuURL, params, {}, callback)
  },
  // 删除个性化菜单
  network_deleteMenu: function (id, callback) {
    networkbase.delete_function(this.data.deleteMenuURL + id, {}, {}, callback)
  },
  // 更新个性化菜单
  network_updateMenu: function (id, params, callback) {
    networkbase.put_function(this.data.updateMenuURL + id, params, {}, callback)
  },
  // 获取主菜单信息
  network_getMenuInfo: function (id, callback) {
    networkbase.get_function(this.data.getMenuInfoURL + id, {}, {}, callback)
  },
  // 新建个性化菜单
  network_addMenuInfo: function (params, callback) {
    networkbase.post_function(this.data.addMenuInfoURL, params, {}, callback)
  },
  // 更新个性化菜单
  network_editMenuInfo: function (id, params, callback) {
    networkbase.put_function(this.data.editMenuInfoURL + id, params, {}, callback)
  },
  // 删除个性化菜单
  network_deleteMainMenu: function (id, params, callback) {
    networkbase.delete_function(this.data.deleteMainMenuURL + id, params, {}, callback)
  },
  // 获取子菜单列表
  network_getSubMenu: function (params, callback) {
    networkbase.get_function(this.data.getSubMenuURL, params, {}, callback)
  },
//获取小程序？？？？？？？？？？？？？？？？？？？？
  network_getApp: function (params, callback) {
    networkbase.get_function(this.data.getAppURL, params, {}, callback)
  },
  //获取素材列表
  network_getSourceList: function (params, callback) {
    networkbase.get_function(this.data.getSourceListURL, params, {}, callback)
  },
  // 新增素材
  network_addSource: function (params, callback) {
    networkbase.post_function(this.data.addSourceURL, params, {}, callback)
  },
  // 修改素材名称
  network_editSourceName: function (id, params, callback) {
    networkbase.put_function(this.data.editSourceNameURL + id, params, {}, callback)
  },
  // 删除素材
  network_deleteSource: function (params, callback) {
    networkbase.delete_function(this.data.deleteSourceURL, params, {}, callback)
  },
  // 更新素材
  network_updateSource: function (id, params, callback) {
    networkbase.put_function(this.data.updateSourceURL + id, params, {}, callback)
  },
  //获取素材信息
  network_getSourceInfo: function (id, callback) {
    networkbase.get_function(this.data.getSourceInfoURL + id, {}, {}, callback)
  },
  // 获取场景列表
  network_getSceneList: function (params, callback) {
    networkbase.get_function(this.data.getSceneListURL, params, {}, callback)
  },
  // 获取场景信息
  network_getSceneInfo: function (id, callback) {
    networkbase.get_function(this.data.getSceneInfoURL + id, {}, {}, callback)
  },
  // 新建场景信息
  network_addSceneInfo: function (params, callback) {
    networkbase.post_function(this.data.addSceneInfoURL, params, {}, callback)
  },
  // 更新场景信息
  network_updateSceneInfo: function (id, params, callback) {
    networkbase.put_function(this.data.updateSceneInfoURL + id, params, {}, callback)
  },
  // 删除场景
  network_deleteScene: function (id, callback) {
    networkbase.delete_function(this.data.deleteSceneURL + id, {}, {}, callback)
  },
  // 场景统计
  network_sceneStatistic: function (id, callback) {
    networkbase.get_function(this.data.sceneStatisticURL + id + '/statistic', {}, {}, callback)
  }

}
