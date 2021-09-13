const Users = require("../models/usersModel")
const {config} = require('../config')

async function registerUser(req , res ){
 console.log(req.body.username);
     console.log(req.body.password);
     try{
   await Users.register(new Users({username: req.body.username, firstName:req.body.firstName}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.send({success:false , data:{msg:"Error in registration"}});
        }
    res.send({success:true, data:{msg:"User Created"}})
    });
}catch(err){
	console.log(err);
	res.send({success:false , data:{msg:"Error While Registration"}})
}
}

async function updateUserRole(req,res){
    try{
    let isUsernameSuperAdmin = false;
    config.superAdminUsernames.map((username)=>{
        if(username == req.user.username){
            isUsernameSuperAdmin = true;
        }
    })

    if(isUsernameSuperAdmin){
        if(req.body.role !== 'admin' && req.body.role !== 'subAdmin' && req.body.role !== 'member') throw new Error("Invalid Role");
       await Users.findOneAndUpdate({username:req.body.username} , { role: req.body.role });
       res.send({success:true,data:{msg:req.body.username + " is now " + req.body.role}});
    }else{
        res.send({success:false , data:{msg:"you are not authorized"}})
    }
}catch(err){
    console.log(err)
    res.send({success:false , data:{msg:err.message}})
}
}

module.exports = {registerUser , updateUserRole}