// pages/shouye/shouye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chock:2,
    fenye:0,
    shoeuxian:false,
    fiedfalse:false,
    istop:0,
    navlist:[],
    producrlist:[],
    navdata:[
      {
        "name": "男装",
        "na":"男鞋男衣"
      },
      {
        "name": "男装",
        "na": "男鞋男衣"
      },
      {
        "name": "男装",
        "na": "男鞋男衣"
      },
      {
        "name": "男装",
        "na": "男鞋男衣"
      },
      {
        "name": "男装",
        "na": "男鞋男衣"
      },
      {
        "name": "男装",
        "na": "男鞋男衣"
      }
    ]

  },
  getnavlist(){
    let that=this;
    wx.request({
      url: 'http://www.hengyishun.cn/login/navlist',
      success(res){
        that.setData({
         navlist:res.data
       })
      }
    })
  },
  producrlist() {
    let that = this;
    wx.request({
      url: 'http://www.hengyishun.cn/login/getProductList',
      success(res) {
        that.setData({
          producrlist: res.data
        })
      }
    })
  },
  clickdian(e){
    console.log(e.currentTarget.id)
    this.setData({
      chock:e.currentTarget.id
    })
  },
  chhua(e){
   
  this.setData({
    fenye: e.detail.current
  })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getnavlist();
    this.producrlist();
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
    let that=this;
    setTimeout(function(){
      wx.createSelectorQuery().select('#hengnav').boundingClientRect(function (rect) {
        that.data.istop = rect.top;
      }).exec()
    },500)
  },
  onPageScroll(options){
    var flag = options.scrollTop >= 500;
    if (flag != this.data.shoeuxian){
      this.setData({
        shoeuxian: flag
      })
    }  

    var flag2 = options.scrollTop >= this.data.istop;
    if (flag2 != this.data.fiedfalse){
      this.setData({
        fiedfalse: flag2
      })
    }

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
      wx.showLoading({
        title: '刷新'
      })

      clearTimeout(timer)
      var timer=setTimeout(function(){
        wx.showToast({
          title: '刷新完成',
        })
        wx.stopPullDownRefresh()
        clearTimeout(timer)
      },1000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showToast({
      title: '没有数据',
      icon:'loading'
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
      return{
        title: '小程序',
        path: "pages/shouye/shouye",
        imageUrl:'/images/temp/banner1.jpg'
      }
  }
})