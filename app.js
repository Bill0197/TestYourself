var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require('multer');
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
var app = express();
var cors = require('cors');
const router = express.Router();
const port = process.env.PORT || 5000;

//Routes
// const UserRoute = express.Router();
let users = require('./module/register')
const registerRoute = require("./routes/register");
const userRoute = require('./routes/allusers')

///axios
// app.all('*/', function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods",
//     "GET, PUT ,POST, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers",
//     "Content-type, Accept, X-Access-Token, X-key");
//   if (req.method == "OPTIONS") {
//     res.status(200).end();
//   }
//   else {
//     next();
//   }
// })
///axios


// Body parser middleware
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

//DB config
mongoose.connect('mongodb://sardor:testing1@ds261616.mlab.com:61616/testinguz', { useNewUrlParser: true })
  .then(() => console.log('database connected to MongoDB'))

//Routes
app.get("/", (req, res) => res.send("main page"));
app.use("/register", registerRoute)
app.use("/data", userRoute)


//server listener
app.listen(port, function () {
  console.log(`Backend Server is working on localhost:${port}`);
})

module.exports = app;
