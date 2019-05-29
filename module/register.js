const mongoose = require('mongoose')
const Shcema = mongoose.Schema;

// var date = new Date(); //2017-04-25T06:23:36.510Z
// date.toLocaleTimeString();  //'11:53:36 AM'
// let localDate = "" + d;  //'Tue Apr 25 2017 11:53:36 GMT+0530 (IST)'

const registerSchema = new mongoose.Schema({
    name: {
        String,
        default: "",
    },
    surname: {
        type: String,
        default: "",
    },
    eml: {
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
        default: Date.localtime
    },
    password: {
        type: Number,
    }

});

const users = mongoose.model("users", registerSchema);
module.exports = users;