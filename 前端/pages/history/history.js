Page({
    data: {
      num: 5,
      str: '02name,www.setu.dfj,www.bidu.com|name2,www.fhhsdfsdf.com,www.nidie.com|',
      list: [],
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
    onReady: function(e) {
      let that = this;
      wx.request({
        url: 'http://yitian.free.svipss.top/deal', //本地服务器地址
        data: { //data中的参数值就是传递给后台的数据
          method: "6",
          id:that.data.openid,
          name:"a",
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
          for(;i<splitArray.length;i=i+1){
            console.log(splitArray[i],"\n");
            }
          var lines=[]
            i=0;
            for(;i<leng;i=i+1){
              lines.splice(0,0,{
              name : splitArray[i],
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
      let that=this
      wx.showModal({
        title: '清除历史记录',
        content: '确定要清除所有历史记录？',
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
              wx.request({
                url: 'http://yitian.free.svipss.top/deal', //本地服务器地址
                data: {
                  method: "5",
                  id:that.data.openid,
                  name: "all",
                },
                method: 'get',
                  header: {
                    'content-type': 'application/json' //默认值
                  },
                success (res) {
                  console.log(res.data)
                }
              })
              wx.showToast({
                      title:"清除所有历史",
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
      wx.request({
        url: 'http://yitian.free.svipss.top/deal', //本地服务器地址
        data: {
          method: "4",
          id:that.data.openid,
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
              title:"清除此历史记录",
              icon: 'success',
              duration: 1000,
        })
      
    },
  })