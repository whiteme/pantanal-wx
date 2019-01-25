import * as echarts from '../../ec-canvas/echarts';
const api = require('../../config/api.js');
const ap = getApp();


function initQuoteLineChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

 

  var option = {
    title: {
      text: '北京房屋租赁-每周行情',
      left: 'center'
    },
    color: ["#37A2DA",  "#9FE6B8"],
    legend: {
      // itemWidth: 15,
      // itemHeight: 35,

      data: ['元/平方米/月', '套/小区'],
      top: 70,
      left: 'center',
      backgroundColor: '#67E0E3',
      z: 100
    },
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ["2018-07-27", "2018-07-28", "2018-07-29", "2018-07-30", "2018-08-30", "2018-08-31", "2018-08-32", "2018-08-33", "2018-08-34", "2018-09-34", "2018-09-35", "2018-09-36", "2018-09-37", "2018-09-38", "2018-09-39", "2018-10-39", "2018-10-40", "2018-10-41", "2018-10-42", "2018-10-43", "2018-11-43", "2018-11-44", "2018-11-45", "2018-11-46", "2018-11-47", "2018-12-47", "2018-12-48", "2018-12-49", "2018-12-50", "2018-12-51", "2018-12-52", "2019-01-00", "2019-01-01"],
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [{
      name: '元/平方米/月',
      type: 'line',
      smooth: false,
      data: [80.6767, 80.8167, 80.907, 80.936, 80.9798, 81.0975, 81.1314, 81.1018, 81.2584, 81.3126, 81.3734, 81.508, 81.6819, 81.9592, 82.0383, 82.0865, 82.2267, 82.2726, 82.2806, 82.2897, 82.3562, 82.4287, 82.5455, 82.6144, 82.7305, 82.7528, 82.8247, 82.9521, 82.9606, 82.9913, 82.9776, 83.0334, 83.047]
    },  {
        name: '套/小区',
      type:'bar',
      smooth: true,
        data: [51.4502, 51.511, 51.6388, 51.7078, 51.7811, 51.866, 51.9686, 52.1142, 52.2645, 52.3166, 52.8983, 52.5679, 52.6588, 52.7579, 52.9057, 52.954, 53.1599, 53.369, 53.5421, 53.6657, 53.753, 53.7969, 53.8926, 53.9267, 54.0585, 54.1444, 54.2751, 54.4663, 54.5788, 54.6851, 54.7544, 54.8526, 54.9151]
    }]
  };
  chart.setOption(option);
  return chart;
}

function initQuoteData(){

}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initQuoteLineChart
    }
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