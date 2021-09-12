const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    email: {type: String},
    password: {type:String},
    role:{type:String , default:"member"},
    createdAt: { type: Date, default: Date.now }
})

userSchema.plugin(passportLocalMongoose);

const Users = mongoose.model('Users', userSchema)
module.exports = Users
