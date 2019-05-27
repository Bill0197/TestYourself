var express = require('express');
var router = express.Router();
var mongo = require('mongo');
var assert = require('assert');

var url = 'mongodb://smd:aa7995803@ds261616.mlab.com:61616/testinguz';

router.get('/get', function (req, res, next) {
    var resultArray = [];
    mongo.connect(url, function (err, db) {
        assert.aqual(null, err);
        var cursor = db.collection('register').find();
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            reasulArray.push(doc);
        }, function () {
            db.close();
            res.render('index', { items: resultArray })
        });
    })
})


router.get('/register', function (req, res, next) {
    var users = {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        school: req.body.school,
        password: req.body.password,
    };

    mongo.connect(url, function (err, db) {
        assert.equal(null, err);
        db.collection('register').insertOne(item, function (err, result) {
            assert.equal(null, err);
            console.log('itme inserted');
            db.clode();
        })
    })

    res.redirect('/');
})