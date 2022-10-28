// pages/home/home.js
Page({
  data: {
    name:'coderwhy',
    age:18,
    students:[
      {id:110,name:'red',age:12},
      {id:111,name:'blue',age:14},
      {id:112,name:'yellow',age:42},
      {id:113,name:'pink',age:22}
    ],
    counter:0
  },
  handleBtnClick(){
    // console.log('click');
    // this.data.counter++  //错误做法

    this.setData({
      counter:this.data.counter+1
    })
  },
  handleSubtraction(){
    this.setData({
      counter:this.data.counter-1
    })
  }
})