Page({
    /**
     * 页面的初始数据
     */
    data: {
       num:'',
       content:'请选择',
       message:[
         {
           id:'0',
           text:"教程第一课",
           learn:[
            {
              id:'0',
              text:"点击进入哔哩哔哩观看视频",
              text1:"第一课",
            }
           ]
         },
         {
           id: '1',
            text:'教程第二课',
            learn:[
              {
                id:'0',
                text:"点击进入哔哩哔哩观看视频",
                text1:"2",
              }
             ]
         },
         {
            id: '2',
             text:'教程第三课',
             learn:[
               {
                 id:'0',
                 text:"点击进入哔哩哔哩观看视频",
                 text1:"抱紧康奇涵大腿",
               }
              ]
          },
          {
            id: '3',
             text:'教程第四课',
             learn:[
               {
                 id:'0',
                 text:"点击进入哔哩哔哩观看视频",
                 text1:"抱紧康奇涵大腿",
               }
              ]
          },
          {
            id: '4',
             text:'教程第五课',
             learn:[
               {
                 id:'0',
                 text:"点击进入哔哩哔哩观看视频",
                 text1:"抱紧康奇涵大腿",
               }
              ]
          },
          {
            id: '5',
             text:'教程第六课',
             learn:[
               {
                 id:'0',
                 text:"点击进入哔哩哔哩观看视频",
                 text1:"抱紧康奇涵大腿",
               }
              ]
          },
]
},
       
  
    clickList:function(e){
       console.log(e)
       let num = e.target.id
       console.log(num)
       let content = this.data.message[num].learn
       console.log(content.text)
        this.setData({
            num:num,
            content:content
        })
        console.log(this) 
    },
    goo:function(e){
      wx.navigateTo({
    //新注册一个承载跳转的页面
        url: '/pages/outrul/index',
      })
    },
    goo1:function(e){
      wx.navigateTo({
    //新注册一个承载跳转的页面
        url: '/pages/outrul2/index',
      })
    },
    
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
  
    },
  
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
  
    }
  })