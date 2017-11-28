var API= require('../../api/index');
var MOVIE= API.movie;

Page({
  data: {
    inTheaters: [],
    comingSoon: [],
    top250: []
  },
  onLoad: function () {
    MOVIE.fetchInTheaters({
      data:{
        start: 0,
        count: 5
      },
      success: (res)=>{
        this.setData({
          inTheaters: this.formatDouBanMovies(res.subjects)
        });
      }
    });

    MOVIE.fetchComingSoon({
      data: {
        start: 0,
        count: 5
      },
      success: (res) => {
        this.setData({
          comingSoon: this.formatDouBanMovies(res.subjects)
        });
      }
    });

    MOVIE.fetchTop250({
      data: {
        start: 0,
        count: 5
      },
      success: (res) => {
        this.setData({
          top250: this.formatDouBanMovies(res.subjects)
        });
      }
    })
  },

  formatDouBanMovies(movies) {
    return movies.map((item, index) => {
      return {
        average: item.rating.average,
        stars: this._getStars(item.rating.stars),
        cover: item.images.small,
        title: item.title,
        id: item.id
      }
    })
  },

  _getStars(starsNum) {
    let star = Math.round(starsNum / 10);
    let stars = [];

    for (let index = 1; index <= 5; index++) {
      if (index <= star) {
        stars.push(1);
      } else {
        stars.push(0)
      }

    }

    return stars;
  }
})