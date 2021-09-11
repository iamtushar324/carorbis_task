//Set up mongoose connection
const mongoose = require("mongoose");
const { config } = require("../config.js");

const mongoDB = config.mongoDBLink;

mongoose.connect(mongoDB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;



module.exports = { mongoose };
