const Blogs = require("../models/blogsModal")
const {config} = require('../config')

async function createBlog(req , res ){
	try{
		console.log(req.user.id);
		let newBlog  = new Blogs({title: req.body.title, mainContent:req.body.mainContent , userId:req.user.id})   
		console.log(newBlog);
		await newBlog.save();
		res.send({success:true , data : {msg:"Blog submitted for review" }})
	
	}catch(err){

		console.log(err);
		res.send({success:false , data:{msg:"Error While Submitting blog"}})

	}
}


module.exports = {createBlog }