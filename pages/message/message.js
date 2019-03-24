// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { id: 1, img_url: "http://127.0.0.1:3000/img/banner1.png",detail:"特产稻香长粒大米10斤",price:33.90 },
      { id: 2, img_url: "http://127.0.0.1:3000/img/banner2.png", detail: "特产稻香长粒大米10斤", price: 39.00 },
      { id: 3, img_url: "http://127.0.0.1:3000/img/banner3.png", detail: "PDD稻香米", price: 39.90 },
      { id: 4, img_url: "http://127.0.0.1:3000/img/banner4.png", detail: "【农谷鲜】农家自产稻花香米", price: 35.90 },
      { id: 5, img_url: "http://127.0.0.1:3000/img/banner1.png", detail: "【农谷鲜】长粒大米10斤", price: 25.50 },
      { id: 6, img_url: "http://127.0.0.1:3000/img/banner3.png", detail: "厨道 花生调和油5L", price: 40.90 }
      ]
  },
  loadMore:function(){
    //1.如果已经没有下一页，就停止函数的执行
    if(this.data.hasMore==false){
      return;
    }
    //2.获取两个参数 pno pageSize
  var pno=this.data.pageIndex+1;
  var ps = this.data.pageSize
    //3.创建ajax请求
    wx.request({
      url: 'http://127.0.0.1:3000/getMessage',
      data:{pno:pno,pageSize:ps},
      success:(res)=>{
        console.log(res)
        //4.接收返回数据
    //5.拼接数组
    var rows=this.data.list.concat(res.data.data);
    //6.获取总页数判断是否有下一页
    var pageCount=res.data.pageCount;
    var flag=pno<pageCount;
    //7.将返回的数据保存data属性
    this.setData({
      list:rows,
      hasMore:flag,
      pageIndex:pno
    })
    //8.添加动画效果 添加‘加载动画’
    wx.showLoading({
      title:"正在加载数据..."
    });
    setTimeout(function(){
      wx.hideLoading();
    },500)

    //9.'加载动画'隐藏
      }
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore()
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
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})