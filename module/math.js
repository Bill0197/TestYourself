const mongoose = require('mongoose')
const Shcema = mongoose.Schema;

const mathSchema = new mongoose.Schema({
    title: { type: String, default: "" },
    content: { type: String, default: "" },
    answer: { type: String, default: "" },


});

const maths = mongoose.model("maths", mathSchema);
module.exports = maths;