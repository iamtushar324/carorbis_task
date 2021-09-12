const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const blogSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, index: true, required: true, ref: "User" },
    mainContent: { type: String, trim: true },
    subAdminVerified: {type: Boolean , default:false},
    adminVerified: {type: Boolean , default:false},
    title: {type:String},
    createdAt: { type: Date, default: Date.now }
})

blogSchema.plugin(passportLocalMongoose);

const Blogs = mongoose.model('Blogs', blogSchema)
module.exports = Blogs
