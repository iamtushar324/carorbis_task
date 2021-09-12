const Blogs = require("../models/blogsModal")
const {config} = require('../config')

async function verifyBlogSubAdmin(req , res ){
	try{
		Blogs.findOneAndUpdate()
		res.send({success:true , data : {msg:"Blog submitted for review"}})
	
	}catch(err){

		console.log(err);
		res.send({success:false , data:{msg:"Error While Submitting App"}})

	}

}


module.exports = {createBlog }