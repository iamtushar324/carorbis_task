const Users = require("../models/userModel")
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

async function makeAdmin(req,res){
    try{
    let isUsernameSuperAdmin = false;
    config.superAdminUsernames.map((username)=>{
        if(username == req.user.username){
            isUsernameSuperAdmin = true;
        }
    })

    if(isUsernameSuperAdmin){
       await Users.findOneAndUpdate({username:req.body.username} , { role: 'admin' });
       res.send({success:true,data:{msg:req.body.username + " is now admin"}});
    }else{
        res.send({success:false , data:{msg:"you are not authorized"}})
    }
}catch(err){
    console.log(err)
    res.send({success:false , data:{msg:"Internal Error"}})
}
    

}


async function makeSubAdmin(req,res){
   
    try{
    let isUsernameSuperAdmin = false;
    superAdminUsernames.map((username)=>{
        if(username == req.user.username){
            isUsernameSuperAdmin = true;
        }
    })

    if(isUsernameSuperAdmin){
       let newUser =  Users.find({username:req.body.username});
       newUser.role = 'admin'
       newUser.save();
       res.send({success:true,data:{msg:req.body.username + " is now admin"}});
    }else{
        res.send({success:false , data:{msg:"you are not authorized"}})
    }
    }catch(err){
    console.log(err)
    res.send({success:false , data:{msg:"Internal Error"}})
    }

}

module.exports = {registerUser , makeAdmin, makeSubAdmin}