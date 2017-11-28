var movie = require('../../api/index').movie;
var util = require('../../util/util');

const TITLE = {
  in_theaters: '正在上映',
  coming_soon: '即将上映',
  top250: '豆瓣Top250'
}

Page({
  data: {
    movies: [],
    start: 1,
    count: 12,
    total: 1,
    type: "",
  },

  onLoad: function (options) {
    wx.showLoading();

    this.setData({
      type: options.type
    }, () => {
      this.fetchMovies();
    });

    wx.setNavigationBarTitle({
      title: TITLE[options.type]
    })
  },

  onReachBottom: function () {
    const {
      start,
      total
    } = this.data;

    if (start <= total) {
      this.fetchMovies();
    }
  },

  fetchMovies() {
    const {
      start,
      count,
      type,
      movies
    } = this.data;

    const requestOpts = {
      data: {
        start,
        count,
        apikey: '0b2bdeda43b5688921839c8ecb20399b'
      },
      success: (res) => {
        this.setData({
          movies: movies.concat(util.formatDouBanMovies(res.subjects)),
          total: res.total,
          start: res.start + res.count
        });
      },
      complete: function () {
        wx.hideLoading();
      }
    }

    switch (type) {
      case 'in_theaters':
        movie.fetchInTheaters(requestOpts);
        break;
      case 'coming_soon':
        movie.fetchComingSoon(requestOpts);

      case 'top250':
        movie.fetchTop250(requestOpts);
      default:
        break;
    }
  }
})