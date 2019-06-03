var express = require('express');
var router = express.Router();
var assert = require('assert');
const user = require('../module/register')
var cors = require('cors');


//working 
router.get("/allusers", (req, res) => {
    // var resultUser = []
    user.find({}, function (errors, data) {
        if (errors) {
            throw errors;
        }
        else {
            res.json(data)
        }
    });
    console.log("post server")
});

module.exports = router;
