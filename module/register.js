const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    name: {
        String,
        default: "",
        required: true
    },
    surname: {
        type: String,
        default: "",
        required: true
    },
    email: {
        type: String,
        default: "",
        required: true
    },
    school: {
        type: String,
        default: "",
        score: 0,
        required: true
    },
    date: {
        type: DataCue,
        default: Date.now()
    },
    password: {
        type: Number,
        default: "",
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    }

});

const users = mongoose.model("users", registerSchema);
module.exports = users;