const express = require('express');
const mainController = require('../controllers/mainController');

// Router creation
const mainRouter = express.Router();

// Routes
mainRouter.get('/', mainController.renderHomePage);

module.exports = mainRouter;
