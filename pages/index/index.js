var API = require('../../api/index');
var MOVIE = API.movie;
var Util = require('../../util/util');

Page({
  data: {
    inTheaters: [],
    comingSoon: [],
    top250: []
  },
  onLoad: function () {
    wx.showLoading()

    const requestData = {
      start: 0,
      count: 5,
      apikey: '0b2bdeda43b5688921839c8ecb20399b'
    }

    MOVIE.fetchInTheaters({
      data: requestData,
      success: (res) => {
        this.setData({
          inTheaters: Util.formatDouBanMovies(res.subjects)
        });
      }
    });

    MOVIE.fetchComingSoon({
      data: requestData,
      success: (res) => {
        this.setData({
          comingSoon: Util.formatDouBanMovies(res.subjects)
        });
      }
    });

    MOVIE.fetchTop250({
      data: requestData,
      success: (res) => {
        this.setData({
          top250: Util.formatDouBanMovies(res.subjects)
        });
      },
      complete: () => {
        wx.hideLoading();
      }
    })
  },
})