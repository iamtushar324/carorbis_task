function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.send("/login");
}

module.exports = {isLoggedIn}