//获取应用实例
const app = getApp()

// pages/scroll/scroll.js
Page({

  /**
   * 页面的初始数据
   */
  onShareAppMessage() {
    return {
      title: 'scroll',
      path:'pages/scroll/scroll',
    }
  },
  data: {
    toView: 'green',
    inputValue:'',
    date:'2018-6-6',
    name:'',
    age:'',
    url: 'https://api.imjad.cn/cloudmusic/?type=lyric&id=28012031',
    userAge: app.globalData.userAge,
    arr1:[1,2,3,4]
  },
  scroll(e) {
    console.log(e)
  },
  tap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },

  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
//获取输入框中的值，并显示在view中
  bindKeyInput:function(e){
    // 修改data中的值，只能使用下面的方法。
    this.setData({
      inputValue:e.detail.value
    })
    app.globalData.userAge=e.detail.value
  },
//修改日期
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  getInfo(){
    wx.request({
      url: 'https://api.imjad.cn/cloudmusic/?type=lyric&id=28012031',
      method:'GET',
      success:res=>{
        console.log(res.data.klyric.version);
        // toast提示框
        wx.showToast({
          title: `歌词版本：${res.data.klyric.version}`,
          icon:'success',
          duration:1500
        })
      }
    })
  },
//处理子组件发射的自定义事件
changeHardler(e){
  console.log(`子组件传过来的值：${e.detail}`)
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
      this.setData({
        name:e.name,
        age:e.age
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})