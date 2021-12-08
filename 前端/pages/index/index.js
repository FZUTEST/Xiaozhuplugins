Page({
  
  data: {
    openid:null,
    listData:[
    {"code":"右键谷歌翻译","text":"Chrome","type":"114514"},
    {"code":"网页截图","text":"Firefox","type":"1919"},
    {"code":"音乐电视","text":"Edge","type":"810"}
    ]
    },
    data1:
    {
      name :'右键谷歌翻译',
      id :'1',
      op :'2'
    },
    data2:
    {
      name :'右键谷歌翻译',
      id :'1',
      op :'1'
    },
    data3:
    {
      name :'网页截图',
      id :'1',
      op :'2'
    },
    data4:
    {
      name :'网页截图',
      id :'1',
      op :'1'
    },
    data5:
    {
      name :'音乐电视',
      id :'1',
      op :'2'
    },
    data6:
    {
      name :'音乐电视',
      id :'1',
      op :'1'
    },
    
    onLoad: function() {
      let that = this;
      wx.getStorage({
        key:"key",
        success(res){
        console.log(res.data)
        that.setData({
          openid:res.data,
         })
        },
      })
  },

    switch1Change: function (e){
      let that = this;
      if(e.detail.value==true) 
      {
        wx.request({
          url: 'http://yitian.free.svipss.top/deal',
          data: {  //前端向后端发送的数据
            method :this.data1.op,
            id:that.data.openid,
            name :that.data.lines[index].name,
          },
          header: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
          success(res) {
            console.log(res)
          }
        })
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
      })

  }
      
      if(e.detail.value==false) 
      {
        {
          wx.request({
            url: 'http://yitian.free.svipss.top/deal',
            data: {  //前端向后端发送的数据
              method :this.data2.op,
              id:that.data.openid,
              name :this.data2.name,
            },
            header: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
            success(res) {
              console.log(res)
            }
          })
          wx.showToast({
            title: '取关',
            icon: 'success',
            duration: 2000
        })
        }
      }
    },
    switch2Change: function (e){
      if(e.detail.value==true) 
      {
        {
          wx.request({
            url: 'http://yitian.free.svipss.top/deal',
            data: {  //前端向后端发送的数据
              method :this.data3.op,
              id:that.data.openid,
              name :this.data3.name,
            },
            header: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
            success(res) {
              console.log(res)
            }
          })
        }
      }
      if(e.detail.value==false) 
      {
        wx.request({
          url: 'http://yitian.free.svipss.top/deal',
          data: {  //前端向后端发送的数据
            method :this.data4.op,
            id:that.data.openid,
            name :this.data4.name,
          },
          header: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
          success(res) {
            console.log(res)
          }
        })
      }
    },
    switch3Change: function (e){
      if(e.detail.value==true) 
      {
        wx.request({
          url: 'http://yitian.free.svipss.top/deal',
          data: {  //前端向后端发送的数据
            method :this.data5.op,
            id:that.data.openid,
            name :this.data5.name,
          },
          header: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
          success(res) {
            console.log(res)
          }
        })
      }
      if(e.detail.value==false) 
      {
        wx.request({
          url: 'http://yitian.free.svipss.top/deal',
          data: {  //前端向后端发送的数据
            method :this.data6.op,
            id:that.data.openid,
            name :this.data6.name,
          },
          header: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
          success(res) {
            console.log(res)
          }
        })
      }
    },
    teachgo: function (options){
      wx.navigateTo({
        url: '../teach/teach',
      })
    },
    teachgo2: function (options){
      wx.navigateTo({
        url: '../teach2/teach2',
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