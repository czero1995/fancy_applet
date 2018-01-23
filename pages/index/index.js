//index.js
//获取应用实例
const app = getApp()
var cartArr = [];
Page({
  data: {
    imgUrls: [
      '../../images/goods/swipe_3.jpg',
      '../../images/goods/swipe_2.jpg',
      '../../images/goods/swipe_1.jpg',
    ],
    productList:[
      {
       
        "GoodsName": "坚果夹心海苔",
        "GoodsPrice": 9,
        "GoodsNum": 1,
        "GoodsImage": "../../images/goods/home_floor_one_1.jpg"
      },
      {
        
        "GoodsName": "卤汁牛肉",
        "GoodsPrice": 32,
        "GoodsNum": 1,
        "GoodsImage": "../../images/goods/home_floor_one_2.jpg"
      },
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
        "CategoryId": "1",
        "GoodsName": "夏威夷果",
        "GoodsPrice": 189,
        "GoodsNum": 1,
        "GoodsImage": "../../images/goods/home_floor_five_1.jpg"
      },
      {
        "CategoryId": "2",
        "GoodsName": "坚果混合",
        "GoodsPrice": 9,
        "GoodsNum": 1,
        "GoodsImage": "../../images/goods/home_floor_five_2.jpg"
      },
      {
        "CategoryId": "1",
        "GoodsName": "风味虾片 ",
        "GoodsPrice": 199,
        "GoodsNum": 1,
        "GoodsImage": "../../images/goods/home_floor_six_1.jpg"
      },
      {
        "CategoryId": "2",
        "GoodsName": "大胡子烧烤味薯片",
        "GoodsPrice": 28,
        "GoodsNum": 1,
        "GoodsImage": "../../images/goods/home_floor_six_2.jpg"
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,

  },
  // 进入商品详情
  onDetail(e){
    wx.setStorage({
      key:"detail",
      data: e.currentTarget.dataset.goods,
    }
      
    ) 
    wx.navigateTo({
      url:'/pages/detail/detail'
    })
  },
  // 添加到购物车
  onAddCart(e){
    cartArr.push(e.currentTarget.dataset.carts);
    wx.setStorage({
      key:"cart",
      data: cartArr,
    });
    wx.showToast({
      title: '添加成功',
      icon: 'success',
      duration: 2000
    })
  }
 
})