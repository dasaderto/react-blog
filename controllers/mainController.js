const Posts = require("../models/Posts.js");

exports.index = async function (request, response) {

    const posts = await Posts.find({});

    response.json(JSON.stringify(posts));
};