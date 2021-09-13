const route = require("express").Router();
const {registerUser,updateUserRole} = require("../../controllers/users-controller")
const passport = require("passport");
const {isLoggedIn} = require('../../middlewares/auth')

route.post("/register",registerUser);
route.post("/login", passport.authenticate("local"), function(req, res){
    if(req.user){
        res.send({success:true , data:null})
    }
    
});

route.get("/logout", function(req, res){
    req.logout();
    res.redirect("/login");
});

route.get("/isLoggedIn" , isLoggedIn , (req,res)=>{
	res.send(true);
})

route.post("/updateUserRole",isLoggedIn ,updateUserRole)

module.exports = {route}