Page({
  data: {
    num: 0,
    listData:[],
    username:null,
    shows:false,
    name:null,
    openid:null,
  },
  onLoad: function(){
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
  formSubmit: function(e) {
      let that = this;
      wx.request({
        url: 'http://yitian.free.svipss.top/deal',
        data:{
          method:"3",
          id:that.data.openid,
          name:e.detail.value.username,
        },
        method: 'get',
        header: {
          'content-type': 'application/json' //默认值
        },
        success (res) {
          console.log(res.data)
        }
      })
      wx.request({
        url: 'http://yitian.free.svipss.top/search', //本地服务器地址
        data: { //data中的参数值就是传递给后台的数据
          username:e.detail.value.username,
        },
        method: 'get',
        header: {
          'content-type': 'application/json' //默认值
        },
        success: function(res) { //res就是接收后台返回的数据
          var splitArray;
          var regex = /,/;
          let i=0;
          let j=0;
          let leng;
          splitArray =res.data.split(regex);
          leng =splitArray.length;
          for(;i<splitArray.length;i=i+4){
            console.log(splitArray[i],splitArray[i+1],splitArray[i+2],splitArray[i+3],"\n");
            }
          var lines=[]
          i=0;
          for(;i<leng;i=i+4){
            lines.splice(0,0,{
            logo : splitArray[i],
            name : splitArray[i+1],
            url : splitArray[i+2],
            bro : splitArray[i+3],
              })
            }
          that.setData({
            length:splitArray,
            lines : lines,
           })
          that.setData({
            re: res.data,
           })
        },
        fail: function(res) {
          console.log("失败");
        }
      })
    },
    clickList: function(event) {
      let index = event.currentTarget.dataset.index
      let that = this
      var a 
      console.log(that.data.lines[index].name)
      if(event.detail.value==true){
        a = "2"
      }
      if(event.detail.value==false){
        a = "1"
      }  
      console.log("a=")
      console.log(a)
      wx.request({
        url: 'http://yitian.free.svipss.top/deal', //本地服务器地址
        data: {
          method: a,
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
      if(event.detail.value==true){
        wx.showToast({
                title:"收藏成功",
                icon: 'success',
                duration: 1000,
          })
      }
      if(event.detail.value==false){
        wx.showToast({
                title:"取消收藏",
                icon: 'success',
                duration: 1000,
          })
      } 
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