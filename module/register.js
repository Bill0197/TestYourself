const mongoose = require('mongoose')
const Shcema = mongoose.Schema;

const registerSchema = new mongoose.Schema({
    name: {
        String,
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
        score: 0,
    },
    date: {
        type: Date,
        default: Date.now()
    },
    password: {
        type: Number,
        default: "",
    }

});

const users = mongoose.model("users", registerSchema);
module.exports = users;