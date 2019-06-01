var express = require('express');
var router = express.Router();
var assert = require('assert');
const user = require('../module/register')


//working 
router.get("/", (req, res) => res.send("working"));

router.post("/", (req, res) => {
    user.create({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        school: req.body.school,
        password: req.body.school,
        score: req.body.score
        // img: img.body.img
    }),
        function (err, user) {
            if (err)
                res.send(err);
            else {
                res.send('saved');
            }
        }

    console.log(req.body.email);
    res.send('done')
});


module.exports = router;
