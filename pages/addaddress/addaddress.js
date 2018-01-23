var addressArr = [];
Page({
  data: {
    multiIndex: [0, 0, 0],
    date: '2016-09-01',
    time: '12:01',
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部'
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  // 保存地址
  onSave(){  
    wx.getStorage({
      key: 'address',
      success: function(res) {
        console.log(res)
      },
    });
    addressArr.push(this.data.region);
    wx.setStorage({
      key: 'address',
      data: addressArr,
    });
    wx.navigateTo({
      url: '/pages/address/address',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})