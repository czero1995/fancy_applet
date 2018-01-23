// pages/cart/cart.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList:[],
    allCoach:0,
    allSelected: false
  },
  // 选择商品
  onSelect(e){
    var radioArr = [];
    const cartlist = this.data.cartList;
    const index = e.currentTarget.dataset.index; 
    const selected = cartlist[index].selected;
    cartlist[index].selected = !selected;
      cartlist.forEach(function(item){
        radioArr.push(item.selected);
      });
      console.log(radioArr);
    if(radioArr.indexOf(false) == -1){
        this.setData({
          allSelected : true
        })
    }else{
      this.setData({
        allSelected: false
      })
    }
    this.setData({
      cartList:cartlist
    });

    this.onCalAllCoach();
  },
  // 添加商品数量
  onOperaAdd(e){
    const cartlist = this.data.cartList;
    const index = e.currentTarget.dataset.index;
    cartlist[index].GoodsNum ++;
    this.setData({
      cartList: cartlist
      
    })
    this.onCalAllCoach();
  },
  // 减少商品数量
  onOperaCut(e) {
    const cartlist = this.data.cartList;
    const index = e.currentTarget.dataset.index;
    if (cartlist[index].GoodsNum>1){
      cartlist[index].GoodsNum--;
    }

    this.setData({
      cartList: cartlist
    })
    this.onCalAllCoach();
  },
  // 选择全部商品
  onSelectAll(){
    const cartlist = this.data.cartList;
    this.setData({
      allSelected: !this.data.allSelected
    }) 
    if (this.data.allSelected){
      cartlist.forEach(function (item) {
        item.selected = true;
      });
    }else{
      cartlist.forEach(function (item) {
        item.selected = false;
      });
    }

    this.setData({
      cartList: cartlist,
    });
    this.onCalAllCoach();
  },
  // 计算商品价格
  onCalAllCoach(){
    var allmoney = 0;
    this.data.cartList.forEach(function(item){
      if(item.selected){
        allmoney += item.GoodsNum * item.GoodsPrice       
      }
    });
    this.setData({
      allCoach: allmoney,
    })    
    
  },
  // 进入商品详情
  onDetail(e) {
    wx.setStorage({
      key: "detail",
      data: e.currentTarget.dataset.goods,
    }

    )
    wx.navigateTo({
      url: '/pages/detail/detail'
    })
  },
  // 提交订单
  onPay() {
    wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000
    });
    setTimeout(() => {
      wx.navigateTo({
        url: '/pages/pay/pay',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }, 2000)
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
    const that = this;
    wx.getStorage({
      key: 'cart',
      success: function (res) {
        if(res.data){
          for (let i in res.data) {
            res.data[i]["selected"] = false;
          }
          that.setData({
            cartList: res.data,
          });
        }
      },
    })
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