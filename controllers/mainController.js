const films = require('../films.json');

const mainController = {
  renderHomePage: (req, res) => {
    const searched = req.query.q;
    if (!searched) {
      res.render("index", {filteredFilms: films});
      return;
    }

    const filteredFilms = films.filter(game => game.title.toLowerCase().includes(searched.toLowerCase()));

    res.render("index", {filteredFilms});
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
