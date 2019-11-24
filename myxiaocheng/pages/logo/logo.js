// pages/logo/logo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneData:''
  },
  shuqujiaodian(e){
    if (e.detail.value.length <= 10 && e.detail.value!=""){
      wx.showToast({
        title: '输入11位手机号',
        icon:"none"
      })
      return;
    }else{
      this.setData({
        phoneData: e.detail.value
      })
    }
    if (this.data.phoneData!=""){
      wx.showToast({
        title: this.data.phoneData,
        icon: "none"
      })
    }
  },
  fonglu(){
    wx.switchTab({
      url: '/pages/shouye/shouye',
    })
    wx.request({
      url: 'http://www.hengyishun.cn/login/login',
      data:{
        phone: this.data.phoneData
      },
      success(res) {
        console.log(res.data)
      }
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