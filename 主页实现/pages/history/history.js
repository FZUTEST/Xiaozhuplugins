Page({
    data: {
      goods:[],
      // 输入框的值
      inpValue:""
    },
    // 输入框的值改变 就会触发的事件
    handleInput(e){
      //获取输入框的值
      const {value}=e.detail;
    },
    // 点击 确认按钮
    handleCancel(){
      
    },
    // 点击 垃圾筒按钮
    use_dustbin(){
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
              
           }
        },
        fail: function (res) { },//接口调用失败的回调函数
        complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）
     })
    }
  })