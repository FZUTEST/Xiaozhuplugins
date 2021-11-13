Page({
    data: {
      userInfo: {},
      hasUserInfo: false,
      canIUseGetUserProfile: false,
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
    
    /*官方提供的用户接口*/
    onLoad() {
      if (wx.getUserProfile) {
        this.setData({
          canIUseGetUserProfile: true
        })
      }
    },
    getUserProfile(e) {
      wx.getUserProfile({
        desc: '用于完善会员资料', 
        success: (res) => {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    },
  })