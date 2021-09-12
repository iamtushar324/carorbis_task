const route = require("express").Router();
const users = require('./users').route
const blogs = require('./blogs').route

route.use("/users", users);;
route.use("/blogs", blogs);;

module.exports = { route };
