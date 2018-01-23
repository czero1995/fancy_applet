// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentBar:0,
    cartArr:[],
    tabBar:[
      {
        "cat_name": "休闲零食"
      },
      {
        "cat_name": "糖果·巧克力"
      },
      {
        "cat_name": "饼干·糕点"
      },
      {
        "cat_name": "果冻·布丁"
      },
      {
        "cat_name": "坚果·炒货"
      },
      {
        "cat_name": "膨化·薯片"
      }
    ],
    categortyContent:[
      {
        "busines": {
          "business_id": 1,
          "business_name": "休闲零食"
        },
        "cart": [
          {
            "CategoryId": "1",
            "GoodsName": "坚果夹心海苔",
            "GoodsPrice": 66,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_one_1.jpg"
          },
          {
            "CategoryId": "2",
            "GoodsName": "卤汁牛肉",
            "GoodsPrice": 88,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_one_2.jpg"
          },
          {
            "CategoryId": "3",
            "GoodsName": "青豌豆",
            "GoodsPrice": 8,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_one_3.jpg"
          },
          {
            "CategoryId": "4",
            "GoodsName": "薯条脆",
            "GoodsPrice": 12,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_one_4.jpg"
          },
          {
            "CategoryId": "5",
            "GoodsName": "小米锅巴",
            "GoodsPrice": 50,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_one_5.jpg"
          },
          {
            "CategoryId": "6",
            "GoodsName": "碳烤牛肉",
            "GoodsPrice": 80,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_one_6.jpg"
          },
        ],

      },
      {
        "busines": {
          "business_id": 2,
          "business_name": "糖果巧克力"
        },
        "cart": [
          {
            "CategoryId": "1",
            "GoodsName": "乐奈牛奶燕麦巧克力 ",
            "GoodsPrice": 78,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_two_1.jpg"
          },
          {
            "CategoryId": "2",
            "GoodsName": "牛轧糖",
            "GoodsPrice": 59,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_two_2.jpg"
          },
          {
            "CategoryId": "3",
            "GoodsName": "冲绳黑糖",
            "GoodsPrice": 18,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_two_3.jpg"
          },
          {
            "CategoryId": "4",
            "GoodsName": "牛奶抹茶糖",
            "GoodsPrice": 22,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_two_4.jpg"
          },
          {
            "CategoryId": "5",
            "GoodsName": "苹果味糖果",
            "GoodsPrice": 59,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_two_5.jpg"
          },
          {
            "CategoryId": "6",
            "GoodsName": "松露巧克力",
            "GoodsPrice": 59,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_two_6.jpg"
          },

        ],

      },
      {
        "busines": {
          "business_id": 1,
          "business_name": "饼干糕点"
        },
        "cart": [
          {
            "CategoryId": "1",
            "GoodsName": "苏打饼干 ",
            "GoodsInfo": "单果重约150g-180g 新鲜水果",
            "GoodsPrice": 61,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_three_1.jpg"
          },
          {
            "CategoryId": "2",
            "GoodsName": "可可威化饼干",
            "GoodsInfo": "12个 约80mm 总重约2.6kg 新鲜水果 ",
            "GoodsPrice": "22",
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_three_2.jpg"
          }
        ],

      },
      {
        "busines": {
          "business_id": 1,
          "business_name": "果冻布丁"
        },
        "cart": [
          {
            "CategoryId": "1",
            "GoodsName": "粒粒鲜果冻 ",
            "GoodsInfo": "一整箱送女友礼盒 74包休闲麻辣零食礼包美味小吃 粉girl1320g",
            "GoodsPrice": 59,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_four_1.jpg"
          },
          {
            "CategoryId": "2",
            "GoodsName": "葡萄果汁软糖",
            "GoodsInfo": "特产约辣辣条200g/盒 ",
            "GoodsPrice": 9,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_four_2.jpg"
          }
        ],

      },
      {
        "busines": {
          "business_id": 1,
          "business_name": "坚果炒货"
        },
        "cart": [
          {
            "CategoryId": "1",
            "GoodsName": "夏威夷果",
            "GoodsInfo": "微压蒸汽阀 24小时智能预约 黄晶内胆3L电饭锅MB-WFS3018Q 11.11好货提前抢",
            "GoodsPrice": 189,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_five_1.jpg"
          },
          {
            "CategoryId": "2",
            "GoodsName": "坚果混合",
            "GoodsInfo": "坚果混合",
            "GoodsPrice": 9,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_five_2.jpg"
          }
        ],

      },
      {
        "busines": {
          "business_id": 1,
          "business_name": "膨化薯片"
        },
        "cart": [
          {
            "CategoryId": "1",
            "GoodsName": "风味虾片 ",
            "GoodsInfo": "爽肤水乳液眼霜面霜 (补水保湿鲜活水嫩 护肤化妆品女护肤套装） ",
            "GoodsPrice": 199,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_six_1.jpg"
          },
          {
            "CategoryId": "2",
            "GoodsName": "大胡子烧烤味薯片",
            "GoodsInfo": "大胡子烧烤味薯片",
            "GoodsPrice": 28,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_six_2.jpg"
          }

        ],

      }
    ],
    categoryList:[]
  },
  // 分类菜单
  onBar(e){
    this.setData({
      currentBar : e.currentTarget.dataset.bar,
      categortyList: this.data.categortyContent[e.currentTarget.dataset.bar]
      
    })
  },
  // 添加到购物车
  onAddCart(e){
    const that = this;
    wx.getStorage({
      key: 'cart',
      success: function(res) {
        that.data.cartArr.push(res.data);
      },
    })
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      categortyList: this.data.categortyContent[this.data.currentBar]
    });
    // console.log(this.data.categortyContent);
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