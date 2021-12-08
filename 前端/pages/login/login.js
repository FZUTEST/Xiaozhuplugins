Page({
    data: {
        userInfo: {},
        code: '',
        tt: '',
        hasUserInfo: false,
    },
    tp_index:function(){
      wx.switchTab({
        url: '../index/index',
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
})