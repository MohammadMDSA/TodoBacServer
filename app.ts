import Server from "bacjs/out/server/server";
import Config from "bacjs/out/server/config";
import * as DotEnv from "dotenv";

DotEnv.config();

let config: Config = {
	routers: [
		{ prefix: "/api", route: "./controllers/todo" }
	],

	// auth: {
	// 	secret: process.env.AUTH_SECRET,
	// 	session: {
	// 		limited: false
	// 	}
	// },

	mongo: {
		connection: "mongodb://localhost/test"
	},
	port: Number(process.env.PORT)
};

let server = new Server(config);

server.start()