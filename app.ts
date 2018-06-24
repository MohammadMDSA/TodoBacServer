import Server from "bacjs/out/server/server";
import Config from "bacjs/out/server/config";

let config: Config = {
	routers: [
		{prefix: "/api", route: "./controllers/todo", }
	],

	// auth: {
	// 	secret: "My secret",
	// 	session: {
	// 		limited: false
	// 	}
	// },

	mongo: {
		connection: "mongodb://localhost/test"
	},
	port: 9000
};

let server = new Server(config);

server.start()