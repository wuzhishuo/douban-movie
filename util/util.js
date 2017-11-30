function formatDouBanMovies(movies) {
  return movies.map((item, index) => {
    return {
      average: item.rating.average,
      stars: getStars(item.rating.stars),
      cover: item.images.small,
      title: item.title,
      id: item.id
    }
  })
}

function getStars(starsNum) {
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

module.exports = {
  formatDouBanMovies,
  getStars
}