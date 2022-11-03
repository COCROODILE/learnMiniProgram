// app.js
App({
  // onLaunch：小程序初始化完成时执行
  onLaunch(options) {
    // 可以发送请求，获取用户信息
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  // 小程序界面显示出来之后执行
  onShow(options){
    // 获取场景值
    // console.log(options);
    wx.getUserInfo({
      success:function(res){
        console.log(res);
      }
    })
  },
  // 小程序界面隐藏之后执行
  onHide(){},
  // 小程序中发生了一些错误时执行
  onError(msg){},

  // 全局变量
  globalData: {
    userInfo: null,
    name:'vangie'
  }
})
