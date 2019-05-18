var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json([
    { id: 1, username: "sardorbek", status: "student" },
    { id: 2, username: "Dilshodbek", status: "student" },
    { id: 3, username: "Azizbek", status: "student" },
    { id: 4, username: "Dilmurod", status: "student" },

  ])
});

module.exports = router;
