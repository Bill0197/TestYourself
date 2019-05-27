const mongoose = requier('mongoose');
mongoose.connect('mongodb://smd:aa7995803@ds261616.mlab.com:61616/testinguz');

mongoose.connection.once('open', function () {
    console.log("connection has ben made ..");
}).on('error', function (error) {
    console.log("Connection errors", error);
})

module.exports.user = require('./register')