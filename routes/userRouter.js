const userController = require("../controllers/userController");
const express = require("express");
const passport = require('passport');
const userRouter = express.Router();

userRouter.post("/register", userController.registration);
userRouter.post("/login", userController.login);
userRouter.get("/im", passport.authenticate('jwt', { session: false }), userController.auth);

module.exports = userRouter;