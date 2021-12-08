Page({
    data: {
      userInfo: {},
      code: '',
      tt: '',
      hasUserInfo: false,
    },
    /*跳转*/
    tp_collect:function(){
      wx.navigateTo({
        url: '../collect/collect',
      })
    },
    tp_history:function(){
      wx.navigateTo({
        url: '../history/history',
      })
    },
    tp_group:function(){
      wx.navigateTo({
        url: '../group/group',
      })
    },
    onLoad:function(){
      let tha= this
      wx.getStorage({
        key:"userInfo",
        success(res){
          tha.setData({
            userInfo: res.data
          })
        }
      })
      wx.getStorage({
        key:"hasUserInfo",
        success(res){
          tha.setData({
            hasUserInfo: res.data
          })
        }
      })
      wx.getStorage({
        key:"code",
        success(res){
          tha.setData({
            code: res.data
          })
        }
      })
    },
    /*退出登录并清楚缓存*/
    bindViewTap:function(){
      wx.showModal({
        title: '退出登录',
        content: '确定要退出登录？',
        showCancel: true,//是否显示取消按钮
        cancelText:"取消",//默认是“取消”
        cancelColor:'#546dfa',//取消文字的颜色
        confirmText:"确认",//默认是“确定”
        confirmColor: '#546dfa',//确定文字的颜色
        success: function (res) {
           if (res.cancel) {
              //点击取消,默认隐藏弹框
           } else {
              //点击确定
              wx.clearStorage({
                success: (res) => {
                  console.log("成功退出");
                },
              })
              wx.showToast({
                      title:"退出登录",
                      icon: 'success',
                      duration: 1500,
                    })
                wx.request({
                  url: 'http://yitian.free.svipss.top/login', //本地服务器地址
                  data: { //data中的参数值就是传递给后台的数据
                    id: 0,
                  },
                  method: 'get',
                  header: {
                    'content-type': 'application/json' //默认值
                  },
                  success: function(res) { //res就是接收后台返回的数据
                    console.log("成功");
                  },
                  fail: function(res) {
                    console.log("失败");
                  }
                })
                wx.reLaunch({
                  url: 'user',
                })
           }
        },
        fail: function (res) { },//接口调用失败的回调函数
        complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）
      })
      
      
    },
     

    
  // 获取code、userInfo等信息
  getUserProfile () {
    var p1 = new Promise((resolve, reject) => {
      let that=this
      wx.login({
        success: res => {
          this.setData({
            code: res.code,
          })
          wx.setStorage({
            key:"code",
            data:that.data.code,
          })
          wx.request({
            url: 'http://yitian.free.svipss.top/login', //本地服务器地址
            data: { //data中的参数值就是传递给后台的数据
              ID: that.data.code,
            },
            method: 'get',
            header: {
              'content-type': 'application/json' //默认值
            },
            success: function(res) { //res就是接收后台返回的数据
              that.setData({
                tt: that.data.code
              })
              wx.setStorage({
                key:"key",
                data:res.data,
              })
              console.log(that.data.tt);
            },
            fail: function(res) {
              console.log("失败");
            }
          })
        },
      })
    })
    var p2 = new Promise((resolve, reject) => {
      wx.getUserProfile({
        desc: '用于完善会员资料',
        success: res => {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          wx.setStorage({
            key:"hasUserInfo",
            data:this.data.hasUserInfo,
          })
          wx.setStorage({
            key:"userInfo",
            data:this.data.userInfo,
          })
        }
      })
    })
    // 同时执行p1和p2，并在它们都完成后执行then
    Promise.all([p1, p2]).then((results) => {
      // results是一个长度为2的数组，放置着p1、p2的resolve
      this.handleUserInfo({
      	  // 这里也可以选择性返回需要的字段
          ...results[0],
          ...results[1]
      })
    })
  },
  // 组织好后端需要的字段，并调用接口
  
  /*bindtest: function(options) {
    let that = this;
    wx.request({
      url: 'http://yitian.free.idcfengye.com', //本地服务器地址
      data: { //data中的参数值就是传递给后台的数据
        transInfo: '呐，这是小程序端给后台的数据'
      },
      method: 'get',
      header: {
        'content-type': 'application/json' //默认值
      },
      success: function(res) { //res就是接收后台返回的数据
        that.setData({
          tt: res.data
        })
        console.log(res.data);
      },
      fail: function(res) {
        console.log("失败");
      }
    })
  } */

})