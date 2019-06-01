const mongoose = require('mongoose')
const Shcema = mongoose.Schema;

const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "",
    },
    surname: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        default: "",
    },
    school: {
        type: String,
        default: "",
    },
    score: {
        type: Number,
        default: 0
    },

    date: {
        type: Date,
        default: Date.now
    },
    password: {
        type: Number,
    }

});

const users = mongoose.model("users", registerSchema);
module.exports = users;