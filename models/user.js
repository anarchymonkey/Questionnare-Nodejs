let mongoose = require('mongoose');


let authSchema = new mongoose.Schema({
    username : String,
    password : String,
    email : String
});


let authModel = new mongoose.model ('auth',authSchema);

module.exports = authModel;