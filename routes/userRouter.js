import userController from "../controllers/userController";
const express = require("express");
const passport = require('passport');
const mainRouter = express.Router();

mainRouter.post("/register", userController.registration);
mainRouter.post("/login", userController.login);
mainRouter.get("/im", passport.authenticate('jwt', { session: false }), userController.auth);

module.exports = mainRouter;