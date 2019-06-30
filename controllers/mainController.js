const Posts = require("../models/Posts.js");

exports.index = async function (request, response) {

    const posts = await Posts.find({});

    response.json(JSON.stringify(posts));
};

exports.postCreate = async function (request, response) {

    const newPost = new Posts({
       title     :request.body.newPost.title,
       post_body :request.body.newPost.post_body,
       img       :request.body.newPost.img,
       metatags  :request.body.newPost.metatags
    });

    newPost.save((err, post) => {
        if (err) {
            response.send(err);
        }
        response.json(JSON.stringify(post));
    });
};

exports.postDelete = function (request, response) {

    let deletePost = request.body.postId;

    Posts.findOneAndDelete({_id: deletePost}, function(err, result){

        if(err){
            return response.status(400).json(err);
        }else{
            response.json(result);
        }
    });

};