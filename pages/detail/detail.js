// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList: {},
    cartArr:[],
  },
  onAddCart(e){
    this.data.cartArr.push(e.currentTarget.dataset.carts);
    wx.setStorage({
      key: "cart",
      data: this.data.cartArr,
    });
    wx.showToast({
      title: '添加成功',
      icon: 'success',
      duration: 2000
    })
  },
  onPay(){
    wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000
    });
    setTimeout(()=>{
      wx.navigateTo({
        url: '/pages/pay/pay',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    },2000)
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
    var that = this;
    wx.getStorage({
      key: "detail",
      success(res) {
        that.setData({
          goodsList:res.data
        })
        
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log('this.goodsList', this.goodsList)
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
  
  },
  
})