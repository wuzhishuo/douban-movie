var movie = require('../../api/index').movie;
var util = require('../../util/util');

Page({
  data: {},

  onLoad: function (opts) {

    movie.getDetail({
      data: {
        id: opts.id,
        apikey: '0b2bdeda43b5688921839c8ecb20399b'
      },
      success: (res) => {
        this.setData({
          ...res,
          countries: res.countries.join(' '),
          genres: res.genres.join('、'),
          stars: util.getStars(res.rating.stars)
        });

        wx.setNavigationBarTitle({
          title: res.title
        })

      }
    })
  }
})