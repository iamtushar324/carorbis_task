const Blogs = require("../models/blogsModal")

async function createBlog(req , res ){
	try{
		let newBlog  = new Blogs({title: req.body.title, mainContent:req.body.mainContent , userId:req.user.id})   
		await newBlog.save();
		res.send({success:true , data : {msg:"Blog submitted for review" }})
	
	}catch(err){

		console.log(err);
		res.send({success:false , data:{msg:"Error While Submitting blog"}})

	}
}

async function getAllBlogs(req, res){
	try{
		let blogs = await Blogs.find({verifySubAdmin:true, verifyAdmin:true})
		res.send({success:true , data: {blogs:blogs}})

	}catch(err){
		console.log(err);
		res.send({success:false , data:{msg:err.message}})
	}
}

async function getUnVerifiedBlogs(req, res){
	try{

		let blogs = [];
		if(req.user.role === 'admin'){
			blogs = await Blogs.find({subAdminVerified: true, adminVerified:false})
		}else if(req.user.role === 'subAdmin'){
			blogs = await Blogs.find({subAdminVerified:false})
		}else {
			throw new Error("Unauthorized")
		}

		res.send({success:true , data: {blogs:blogs}})

	}catch(err){

		console.log(err);
		res.send({success:false , data:{msg:err.message}})

	}
}


module.exports = {createBlog , getAllBlogs, getUnVerifiedBlogs }