import emotions from './emotions'

export default {
  /* 设置cookie属性值
  *  cookieName:cookie属性名
  *  value:cookie属性值,
  *  day:时间
  */
  setCookie: function (cookieName, value, days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = cookieName + "=" + encodeURIComponent(value) + ";expires=" + date.toUTCString() + ";path=/;";
    } else {
      document.cookie = cookieName + "=" + value;
    }
  },
  /* 读取cookie */
  getCookie: function (cookieName) {
    var res = "";
    var where = document.cookie;
    var cook = where.split(";");
    for (var i = 0; i < cook.length; i++) {
      let arr = cook[i].split("=");
      if (cookieName === arr[0].replace(/(^\s*)|(\s*$)/g, "")) {
        if (arr.length > 1) {
          res = decodeURIComponent(arr[1]);
        }
      }
    }
    return res;
  },
  /* 删除cookie */
  clearCookie: function (cookieName) {
    if (document.cookie.indexOf(cookieName + "=") !== -1) {
      var date = new Date();
      // 将date设置为 time 天以后的时间
      date.setDate(date.getTime() - 1000);
      document.cookie = cookieName + "=" + "" + ";expires=" + date.toUTCString();
    }
  },

// 获取emoji表情对应的url
  getEmotionUrl: function (name) {
    var url = null;
    for (let key in emotions) {
      var reg = new RegExp("\[" + name + "\]");
      var item = emotions[key];
      if (reg.test(item[0])) {
        url = item[1];
        break;
      }
    }
    return url;
  },

  // 获取字符长度
  getLength(str) {
    let len = 0;
    let arr = str.split('');
    let reg = /[\u2E80-\u9FFF]/;  // 表示匹配汉字，汉字符号
    for (let i = 0; i < arr.length; i++) {
      if (!reg.test(arr[i])) {
        len += 1;
      } else {
        len += 2;
      }
    }
    return len;
  }
}

