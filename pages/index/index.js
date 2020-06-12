//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userAge:''
  },
  //事件处理函数
        //通过设置bindtap属性值来控制 -页面跳转
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindViewScroll:function(){
    // 如果是普通页面，则用navigateTo方法跳转
        // wx.navigateTo({
        //   url: '../scroll/scroll?name=jack&age=18'
        // })
    // 如果目标页面是tabBae页面，则需要switchTab方法跳转
    wx.switchTab({
      url: '../scroll/scroll',
    })
  },
  onLoad: function (e) {
    console.log(e.from)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getData(){
    this.setData({
      userAge:app.globalData.userAge
    })
  }
})
