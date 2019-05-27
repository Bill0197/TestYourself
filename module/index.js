const mongoose = requier('mongoose');
mongoose.connect('mongodb://smd:aa7995803@ds261616.mlab.com:61616/testinguz');



module.exports.user = require('./register')