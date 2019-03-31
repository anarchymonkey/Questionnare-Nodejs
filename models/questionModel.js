// importing the package named mongoose
let mongoose = require('mongoose');


// making the schema object
let dbSchema = new mongoose.Schema({
    title : String,
    type : String,
    addQuestion : String,
    question : Array,
    correct : String
});

// creating the mirror image of the db created in the mongodb localhost.
let dbModel = new mongoose.model('questionnare',dbSchema);

// to export this package to the main app, without it you cant include it.
module.exports = dbModel;