import * as wiki   from "./wiki";
import * as http   from "http";
import express     from "express";
import socket      from "socket.io";

const SERVER_PORT  = 3000;
const SENDFILE_OPT = {
	root: __dirname + "/views/"
}

let app    = express();
let server = http.Server(app);
let io     = socket(http).listen(server);

app.get("/", (req, res) => {
	res.sendFile("index.html", SENDFILE_OPT);
});

io.on("connection", (socket) => {
	console.log("user connected");

	socket.on("search", (msg) => {
		wiki.Request(msg, (page, nextPage) => {
			io.emit("search result", {src: page, res: nextPage});
		});
	});
});

server.listen(SERVER_PORT, () => console.log("Listening on " + SERVER_PORT));
