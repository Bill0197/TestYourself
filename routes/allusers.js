var express = require('express');
var router = express.Router();
var assert = require('assert');
const user = require('../module/register')


//working 
router.get("/", (req, res) => {
    // var resultUser = []
    user.find({}, function (req, docs) {
        // if (err) res.json(err);
        res.send(docs)
    });
    console.log("post server")
});

module.exports = router;
