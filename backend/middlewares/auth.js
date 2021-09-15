function isLoggedIn(req, res, next){
    console.log(req)
    console.log(req.isAuthenticated())
    if(req.isAuthenticated()){
        return next();
    }else{
    res.send({success:false , data:null , redirect:'/login'});
    }
}

module.exports = {isLoggedIn}