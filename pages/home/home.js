// pages/home/home.js
// getApp()可以获取App()产生的示例元素
const app = getApp()
// console.log(app.globalData.name);
const name = app.globalData.name

// 注册一个页面
// 页面也有自己的生命周期函数
Page({
  data: {
    name: 'coderwhy',
    age: 18,
    students: [
      { id: 110, name: 'red', age: 12 },
      { id: 111, name: 'blue', age: 14 },
      { id: 112, name: 'yellow', age: 42 },
      { id: 113, name: 'pink', age: 22 }
    ],
    counter: 0
  },

  // 监听wxml中相关事件
  handleBtnClick() {
    // console.log('click');
    // this.data.counter++  //错误做法

    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  // 获取用户信息
  handleGetUserInfo(event) {
    console.log(event);
  },

  // 监听页面的生命周期函数
  onLoad() {
    // console.log('onLoad');
  },
  // onShow：页面显示出来时
  onShow() {
    // console.log('onShow');

  },
  //onReady：页面初次渲染完成时（只执行一次）
  onReady() {
    // console.log('onReady');

  },
  // onHide:页面隐藏起来时
  onHide() {
    // console.log('onHide');

  },
  // onUnload：页面被销毁时
  onUnload() { },


  // 监听其他事件
  // 监听页面的滚动
  onPageScroll(obj) {
    console.log(obj);
  },
  // 监听页面滚动到底部
  onReachBottom() {
    console.log('11111111');
  },
  // 监听下拉刷新
  onPullDownRefresh() {
    console.log('下拉了');
  }
})