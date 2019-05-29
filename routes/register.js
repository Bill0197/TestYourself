var express = require('express');
var router = express.Router();
var assert = require('assert');
// import '../module/register'
const user = require('../module/register')


//working 
router.get("/", (req, res) => res.send("working"));

router.post("/", (req, res) => {
    user.create({
        name: req.body.name,
        surname: req.body.surname,
        eml: req.body.eml,
        school: req.body.school,
        password: req.body.school,
        // img: img.body.img
    }),
        function (err, user) {
            if (err)
                res.send(err);
            else {
                res.send('saved');
            }
        }

    console.log('req', req.body);
    console.log(req.body.name);
    res.send('done')
});


module.exports = router;
