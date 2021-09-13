function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.send({success:false , data:null , redirect:'/login'});
}

module.exports = {isLoggedIn}