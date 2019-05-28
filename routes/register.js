var express = require('express');
var router = express.Router();
var assert = require('assert');


router.get("/", (req, res) => res.send("working"));

router.post("/", (req, res) => {
    console.log('req', req.body);
    console.log(req.body.name);
    res.send('done')
});


module.exports = router;
