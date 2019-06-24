const express = require("express");
const mainController = require("../controllers/mainController.js");
const mainRouter = express.Router();

mainRouter.get("/", mainController.index);

module.exports = mainRouter;