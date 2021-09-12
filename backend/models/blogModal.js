const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const blogSchema = new mongoose.Schema({
    userId: { type: String, trim: true },
    mainContent: { type: String, trim: true },
    subAdminVerified: {type: bool , default:false},
    adminVerified: {type: bool , default:false},
    title: {type:String},
    createdAt: { type: Date, default: Date.now }
})

blogSchema.plugin(passportLocalMongoose);

const Blogs = mongoose.model('Blogs', blogSchema)
module.exports = Blogs
