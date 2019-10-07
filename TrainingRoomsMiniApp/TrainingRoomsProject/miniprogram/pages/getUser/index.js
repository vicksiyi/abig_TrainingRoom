const {
  $Message
} = require('../../dist/base/index');
const nav = require('../../utils/navigateto.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getUser: function(res) {
    if (res.detail.errMsg == "getUserInfo:ok") {
      wx.setStorageSync('token', 1)
      nav.admin("index", 'redirectTo')
    } else {
      $Message({
        content: '用户取消',
        type: 'error'
      });
    }
  },
  onLoad: function() {
    try {
      let value = wx.getStorageSync('token')
      if (value) {
        nav.admin("index", 'redirectTo')
      }
    } catch (err) {
      console.log(err)
    }

  }
})