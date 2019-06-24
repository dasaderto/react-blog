const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    img: String,
    title: String,
    metatags: Array,
    post_body: String,
}, {
    versionKey: false,
    timestamps: true
});

schema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('Post', schema);
