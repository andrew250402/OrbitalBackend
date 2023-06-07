const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Make Schema, defining structure
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});

//Create model based on the Schema and define name
const User = mongoose.model('User', userSchema);

//Export
module.exports = User;