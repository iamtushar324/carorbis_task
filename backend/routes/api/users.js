const route = require("express").Router();
const {registerUser, makeAdmin, makeSubAdmin} = require("../../controllers/users-controller")
const passport = require("passport");
const {isLoggedIn} = require('../../middlewares/auth')

route.post("/register",registerUser);
route.post("/login", passport.authenticate("local",{
    successRedirect: "/feed",
    failureRedirect: "/login"
}), function(req, res){
    
});

route.get("/logout", function(req, res){
    req.logout();
    res.redirect("/login");
});

route.get("/isLoggedIn" , isLoggedIn , (req,res)=>{
	res.send(true);
})

route.post("/makeAdmin",isLoggedIn ,makeAdmin)
route.post("/makeSubAdmin",isLoggedIn ,makeSubAdmin)

module.exports = {route}