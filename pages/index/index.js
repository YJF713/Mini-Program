//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
     inputValue:'',
     data:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  
  bindInput:function(e){  
    this.setData({ 
        inputValue:e.detail.value  
   })  
 }, 
 setSearchStorage:function(){  
     
 },
  onLoad: function () {
  }
})
