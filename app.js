var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
const port = 5000;
app.listen(port, function () {
  console.log(`Server is working on${port}`);
})



module.exports = app;
