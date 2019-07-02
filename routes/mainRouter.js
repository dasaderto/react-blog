const express = require("express");
const mainController = require("../controllers/mainController.js");
const checkToken = require('../middlewares/auth');
const mainRouter = express.Router();

mainRouter.get("/", mainController.index);
mainRouter.post("/posts/create",checkToken, mainController.postCreate);
mainRouter.delete("/posts/delete",checkToken, mainController.postDelete);

module.exports = mainRouter;