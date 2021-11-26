Page({
    data: {
      num: 10,
      listData:[],
      username:null,
      "image" : "../../icon/delete.png",
    },

    
    data: {
      username:null,
    },
    onLoad: function(e) {
        let that = this;
        let base64 = wx.getFileSystemManager().readFileSync(this.data.image,'base64')
        that.setData({
          'image':'data：image/jpg;base64,' + base64
        })
        wx.request({
          url: 'http://yitian.free.svipss.top/deal', //本地服务器地址
          data: { //data中的参数值就是传递给后台的数据
            method: "7",
            id:"1",
          },
          method: 'get',
          header: {
            'content-type': 'application/json' //默认值
          },
          success: function(res) { //res就是接收后台返回的数据
            var splitArray;
            var regex = /,/;
            let i=0;
            let leng;
            splitArray =res.data.split(regex);
            leng =splitArray.length;
            for(;i<splitArray.length;i=i+3){
              console.log(splitArray[i],splitArray[i+1],splitArray[i+2],"\n");
              }
            var lines=[{
              logo: '',
              url:'',
              name:'',
              }]
              i=0;
              for(;i<leng;i=i+3){
                lines.splice(0,0,{
                logo : splitArray[i],
                name : splitArray[i+1],
                url : splitArray[i+2],
                  })
                }
            that.setData({
              length:splitArray,
              lines : lines,
             })
             var jsa =  JSON.stringify(lines);
          },
          fail: function(res) {
            console.log("失败");
          }
        })
      },


      use_dustbin(event){
        const that=this
        wx.showModal({
          title: '清除所有收藏',
          content: '确定要清除所有收藏？',
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
                that.data.lines.splice(0,200)
                that.setData({
                lines: that.data.lines
                })
                wx.showToast({
                        title:"清除所有收藏",
                        icon: 'success',
                        duration: 1500,
                      })
             }
          },
          fail: function (res) { },//接口调用失败的回调函数
          complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）
       })
      },
    
    clickList: function(event) {
      let index = event.currentTarget.dataset.index
      let that = this
      console.log(that.data.lines[index].name)
      wx.request({
        url: 'http://yitian.free.svipss.top/deal', //本地服务器地址
        data: {
          method: "1",
          id:"1",
          name: that.data.lines[index].name,
        },
        method: 'get',
          header: {
            'content-type': 'application/json' //默认值
          },
        success (res) {
          console.log(res.data)
        }
      })
      this.data.lines.splice(index, 1)
      this.setData({
        lines: this.data.lines
      })
      wx.showToast({
              title:"清除此收藏",
              icon: 'success',
              duration: 1000,
        })
    },
    copy:function(event){
      var th=this
      let index = event.currentTarget.dataset.index
      console.log(index)
      wx.setClipboardData({
        data: th.data.lines[index].url, //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },



  })