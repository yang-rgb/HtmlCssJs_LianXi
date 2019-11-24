// pages/home/home.js
import { getMultiData} from "../../service/home.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommend:[],
    goods:{
      "pop":{page:0,list:[]},
      "new": { page: 0, list: [] },
      "sell": { page: 0, list: [] }
    }
  },
  handshu2(event){
    console.log(event)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: 'title',
    })
    getMultiData().then((res)=>{
      wx.hideLoading();
      const banners=res.data.slice(0,6)
      const recommend = res.data.slice(10, 14)
      console.log(banners)
      // const banners=JSON.parse(bannerse)
      this.setData({
        banners,
        recommend
      })
    })
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