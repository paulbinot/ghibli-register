const express = require('express');
const mainController = require('../controllers/mainController');

// Router creation
const mainRouter = express.Router();

// Routes
mainRouter.get('/', mainController.renderHomePage);
mainRouter.get('/films/:filmName', mainController.renderFilmPage);

module.exports = mainRouter;
