// pages/fenlei/fenlei.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fenleidata:[
      {
        "id":1,
        "name": "手机",
      },
      {
        "id": 2,
        "name": "电脑",
      },
      {
        "id": 3,
        "name": "数码",
      },
      {
        "id": 4,
        "name": "服装",
      },
      {
        "id": 4,
        "name": "服装",
      },
      {
        "id": 4,
        "name": "服装",
      },
      {
        "id": 4,
        "name": "服装",
      },
      {
        "id": 4,
        "name": "服装",
      },
      {
        "id": 4,
        "name": "服装",
      },
      {
        "id": 4,
        "name": "服装",
      },
      {
        "id": 4,
        "name": "服装",
      },
      {
        "id": 4,
        "name": "服装",
      },
      {
        "id": 4,
        "name": "服装",
      },
      {
        "id": 4,
        "name": "服装",
      },
      {
        "id": 4,
        "name": "服装",
      },
      {
        "id": 4,
        "name": "服装",
      },
      {
        "id": 4,
        "name": "服装",
      }
    ],
    productList: [
      {
        "id": 1,
        "name": "华为Mate 30",
        "src": "/images/temp/cate1.jpg",
        "price": 4099,
        "classid":1
      },
      {
        "id": 2,
        "name": "华为Mate 30",
        "src": "/images/temp/cate2.jpg",
        "price": 4099,
        "classid": 2

      },
      {
        "id": 3,
        "name": "华为Mate 30",
        "src": "/images/temp/cate3.jpg",
        "price": 4099,
        "classid": 3

      },
      {
        "id": 4,
        "name": "华为Mate 30",
        "src": "/images/temp/cate4.jpg",
        "price": 4099,
        "classid": 4

      },
      {
        "id": 5,
        "name": "华为Mate 30",
        "src": "/images/temp/cate5.jpg",
        "price": 4099,
        "classid": 2

      },
      {
        "id": 6,
        "name": "华为Mate 30",
        "src": "/images/temp/cate6.jpg",
        "price": 4099,
        "classid": 1

      },
      {
        "id": 7,
        "name": "华为Mate 30",
        "src": "/images/temp/cate7.jpg",
        "price": 4099,
        "classid": 2

      },
      {
        "id": 8,
        "name": "华为Mate 30",
        "src": "/images/temp/cate8.jpg",
        "price": 4099,
        "classid": 4

      },
      {
        "id": 9,
        "name": "华为Mate 30",
        "src": "/images/temp/cate9.jpg",
        "price": 4099,
        "classid": 3

      },
      {
        "id": 10,
        "name": "华为Mate 30",
        "src": "/images/temp/cate10.jpg",
        "price": 4099,
        "classid": 3
      },],
    prList:[],
    chock:0
  },
  dianclick(e){
    console.log(e)
    this.setData({
      chock: e.currentTarget.id
    })
    
    var list=[];
    for (var i = 0; i < this.data.productList.length;i++){
      if (this.data.productList[i].classid == e.currentTarget.id){
        list.push(this.data.productList[i])
      }
    }
    this.setData({
      prList: list
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