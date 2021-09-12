const route = require("express").Router();
const users = require('./users').route

route.use("/users", users);;

module.exports = { route };
