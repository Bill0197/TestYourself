var express = require('express');
var router = express.Router();
var assert = require('assert');
const user = require('../module/register')
var cors = require('cors');


router.get("/allusers", (req, res) => {
    user.find({}, function (errors, data) {
        if (errors) {
            throw errors;
        }
        else {
            res.json(data)
        }
    });
    console.log("get server")
});

module.exports = router;
