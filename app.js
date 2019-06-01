var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require('multer');
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
var app = express();
const router = express.Router();
const port = process.env.PORT || 5000;

//Routes
// const UserRoute = express.Router();
let users = require('./module/register')
const registerRoute = require("./routes/register");
const userRoute = require('./routes/allusers')

// Body parser middleware
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//DB config
mongoose.connect('mongodb://sardor:testing1@ds261616.mlab.com:61616/testinguz', { useNewUrlParser: true })
  .then(() => console.log('connected'))

//Routes
app.get("/", (req, res) => res.send("main page"));
app.use("/register", registerRoute)
app.use("/allusers", userRoute)


//server listener
app.listen(port, function () {
  console.log(`Server is working on ${port}`);
})

module.exports = app;
