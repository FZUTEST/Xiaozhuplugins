Page({
  
  data: {
    listData:[
    {"code":"Google翻译","text":"Chrome","type":"114514"},
    {"code":"网页截图","text":"Firefox","type":"1919"},
    {"code":"油猴","text":"Edge","type":"810"}
    ]
    },
    switch1Change: function (e){
      console.log('switch1 发生 change 事件，携带值为', e.detail.value)
    },
    switch2Change: function (e){
      console.log('switch2 发生 change 事件，携带值为', e.detail.value)
    },
    switch3Change: function (e){
      console.log('switch3 发生 change 事件，携带值为', e.detail.value)
    },
    teachgo: function (options){
      wx.navigateTo({
        url: '../teach/teach',
      })
    },
    onLoad: function () {
    console.log('onLoad') 
    },
    
  /**
   * 页面的初始数据
   */
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})