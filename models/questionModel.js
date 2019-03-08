let mongoose = require('mongoose');

let dbSchema = new mongoose.Schema({
    title : String,
    type : String,
    addQuestion : String,
    question : Array,
    correct : String
});

let dbModel = new mongoose.model('questionnare',dbSchema);

module.exports = dbModel;