const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Make Schema, defining structure
const userSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        requied: true
    },
    currentModules: {
        type: Array,
        required: true
    }
}, {timestamps: true});

//Login method
userSchema.statics.login = async function(email, password) {

    if(!email || !password){
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({ email, password })

    if (!user) {
        throw Error('Incorrect email or password')
    }
    return user
}

//Create model based on the Schema and define name
const User = mongoose.model('User', userSchema);

//Export
module.exports = User;