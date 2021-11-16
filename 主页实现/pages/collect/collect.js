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
      
    }
  })