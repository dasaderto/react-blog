const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
}, {
    versionKey: false,
    timestamps: true
});

usersSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('User', usersSchema);
