const Blogs = require("../models/blogsModal")
const {config} = require('../config')

async function verifyBlogById(req , res ){
	try{
		console.log(req.user)
		if(req.user.role !== 'subAdmin' && req.user.role !== 'admin') throw new Error("Not Authorized");
		if(req.user.role === 'subAdmin'){
			await Blogs.findOneAndUpdate({_id:req.body.blogId} , {subAdminVerified:true})
		}else if(req.user.role === 'admin'){
			await Blogs.findOneAndUpdate({_id:req.body.blogId} , {adminVerified:true})
		}
		res.send({success:true , data : {msg:"Blog submitted for review"}})
	}catch(err){
		console.log(err);
		res.send({success:false , data:{msg:err.message}})
	}

}


module.exports = {verifyBlogById}