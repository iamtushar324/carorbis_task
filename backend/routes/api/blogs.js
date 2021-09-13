const route = require("express").Router();
const {createBlog , getAllBlogs , getUnVerifiedBlogs} = require("../../controllers/blogs-controller")
const passport = require("passport");
const { isLoggedIn } = require('../../middlewares/auth')

route.post("/create",isLoggedIn , createBlog);
route.get("/getUnVerifiedBlogs",isLoggedIn , getUnVerifiedBlogs);
route.get("/" ,isLoggedIn, getAllBlogs) 

module.exports = {route}