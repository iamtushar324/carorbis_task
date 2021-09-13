const route = require("express").Router();
const users = require('./users').route
const blogs = require('./blogs').route
const review = require('./review').route

route.use("/users", users);;
route.use("/blogs", blogs);;
route.use("/review", review);;

module.exports = { route };
