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
                
              }
             ]
         },
         {
            id: '2',
             text:'教程第一课',
             learn:[
               {
                 id:'0',
                 text:"点击进入哔哩哔哩观看视频",
                 
               }
              ]
          },
          {
            id: '3',
             text:'教程第四课',
             learn:[
               {
                 id:'0',
                 text:"l4",
                 
               }
              ]
          },
          {
            id: '4',
             text:'learn5',
             learn:[
               {
                 id:'0',
                 text:"l5",
                 
               }
              ]
          },
          {
            id: '5',
             text:'learn6',
             learn:[
               {
                 id:'0',
                 text:"l6",
                 
               }
              ]
          },
          {
            id: '6',
             text:'learn7',
             learn:[
               {
                 id:'0',
                 text:"l7",
                 
               }
              ]
          },
          {
            id: '7',
             text:'learn8',
             learn:[
               {
                 id:'0',
                 text:"l8",
                 
               }
              ]
          },
          {
            id: '8',
             text:'learn9',
             learn:[
               {
                 id:'0',
                 text:"l9",
                 
               }
              ]
          },
          {
            id: '9',
             text:'learn10',
             learn:[
               {
                 id:'0',
                 text:"l9",
                 
               }
              ]
          },
          {
            id: '10',
             text:'learn11',
             learn:[
               {
                 id:'0',
                 text:"l9",
                 
               }
              ]
          },
          {
            id: '11',
             text:'learn12',
             learn:[
               {
                 id:'0',
                 text:"l9",
                 
               }
              ]
          },
          {
            id: '12',
             text:'learn13',
             learn:[
               {
                 id:'0',
                 text:"l9",
                 
               }
              ]
          },
          {
            id: '13',
             text:'learn14',
             learn:[
               {
                 id:'0',
                 text:"l9",
                 
               }
              ]
          },
          {
            id: '14',
             text:'learn15',
             learn:[
               {
                 id:'0',
                 text:"l9",
                 
               }
              ]
          },
          {
            id: '15',
             text:'learn16',
             learn:[
               {
                 id:'0',
                 text:"l9",
                
               }
              ]
          },
          {
            id: '16',
             text:'learn17',
             learn:[
               {
                 id:'0',
                 text:"大家好，欢迎来到chrome浏览器插件开发，这是我们的第17课，也是我们content_scripts系列的第3课，本次课程我们将学习web_accessible_resources。",
                
               }
              ]
          },
          {
            id: '17',
             text:'learn18',
             learn:[
               {
                 id:'0',
                 text:"l18",
                 text1:"点击进入哔哩哔哩观看视频",
               }
              ]
          },
          {
            id: '18',
             text:'learn19',
             learn:[
               {
                 id:'0',
                 text:"l9",
                 text1:"点击进入哔哩哔哩观看视频",
               }
              ]
          },
          {
            id: '19',
             text:'learn20',
             learn:[
               {
                 id:'0',
                 text:"l9",
                 text1:"点击进入哔哩哔哩观看视频",
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
    goo2:function(e){
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