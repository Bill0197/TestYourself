var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require('multer');
var app = express();
const port = 5000;
const router = express.Router();


app.listen(port, function () {
  console.log(`Server is working on${port}`);
})



module.exports = app;
