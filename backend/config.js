require("dotenv").config();

const ENV = process.env.APP_ENV; // 'pro' || 'dev' || 'test'
const MONGO_HOST = process.env.MONGO_HOST;

const dev = {
	mode: "dev",
	clients: ["http://localhost:3000", "http://macbook.local:3000",],
	app: {
		port: 4563,
	},
	mongoDBLink: `mongodb://${MONGO_HOST}:27017/carorbis_task_dev`,
	timeZone: "Asia/Calcutta",
	logReqBody: true,
	logReqParams: true,
};
const pro = {
	mode: "pro",
	clients: [
		"http://localhost/",
		"http://localhost:3000",
		"http://macbook.local:3000",
		"http://macbook.local",
		"https://task.iamtushar324.live",
	],
	app: {
		port: 4562,
	},
	mongoDBLink: `mongodb://${MONGO_HOST}:27017/carorbis_task`,
	timeZone: "Asia/Calcutta",
	logReqBody: false,
	logReqParams: false,
};

const config = {
	dev: { ...dev },
	pro: { ...pro },
};

module.exports.config = config[ENV];
