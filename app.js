const path = require('path');
var cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const config = require('./config');
const express = require("express");
const mainRouter = require("./routes/mainRouter.js");

mongoose.Promise = global.Promise;
mongoose.set('debug', true);

mongoose.connection
    .on('error', error => console.log(error))
    .on('close', () => console.log('Database connection closed.'))
    .on('open', () => console.log("Connection to DB was sucessed"));

mongoose.connect(config.MONGO_URL, {
    useNewUrlParser: true
});

const app = express();
app.use(cors());
app.use("/", mainRouter);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.status(404).send("Not Found");
});

app.listen(config.PORT, function () {
    console.log(`Example app listening on port ${config.PORT}!`);
});
