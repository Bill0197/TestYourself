var express = require('express');
var router = express.Router();
var assert = require('assert');
const maths = require('../module/math')


//working 
router.get("/", (req, res) => res.send("math server"));


router.post("/", (req, res) => {
    maths.create({
        title: req.body.title,
        content: req.body.content,
        answer: req.body.answer

    }),
        function (err, maths) {
            if (err)
                res.send(err);
            else {
                res.redirect('/');
            }
        }

    res.send('done')
});


module.exports = router;
