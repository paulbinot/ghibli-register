const films = require('../films.json');

const mainController = {
  renderHomePage: (req, res) => {
    res.render("index");
  },
  renderFilmPage: (req, res) => {
    const filmData = films.find(film => film.title.replace(/\s/g, '-') === req.params.filmName);
    if (filmData) {
      res.render("film", {filmData});
    } else {
      res.statusCode = 404;
      res.render("404page");
    }
  }
};

module.exports = mainController;
