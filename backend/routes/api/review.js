const route = require("express").Router();
const {verifyBlogById} = require("../../controllers/review-controller")
const passport = require("passport");
const { isLoggedIn } = require('../../middlewares/auth')

route.post("/verify",isLoggedIn , verifyBlogById);

module.exports = {route}