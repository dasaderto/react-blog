const express = require("express");
const mainController = require("../controllers/mainController.js");
const mainRouter = express.Router();

mainRouter.get("/", mainController.index);
mainRouter.post("/posts/create", mainController.postCreate);

module.exports = mainRouter;