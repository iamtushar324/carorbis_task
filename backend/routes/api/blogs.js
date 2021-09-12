const route = require("express").Router();
const {createBlog} = require("../../controllers/blogs-controller")
const passport = require("passport");
const { isLoggedIn } = require('../../middlewares/auth')

route.post("/create",isLoggedIn , createBlog);

module.exports = {route}