const express = require('express');
const http = require('http');
const socketIo  = require('socket.io');

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);
const io = socketIo(server);

const axios = require('axios');

io.on('connection',socket=>{
	console.log("Client Connected",setInterval(()=>getApiAndEmit(socket),1000));
	socket.on('disconnect',()=>console.log("Client disconnect"));
});

const getApiAndEmit = async socket => {
	try{
		const res = await axios.get("https://api.darksky.net/forecast/7d530527ba3628f4e48509559ddb8203/43.7695,11.2558");
		socket.emit("FromAP",res.data.currently.temperature);

	}
	catch(err){
		console.log("error",err);
	}
}

server.listen(port,()=> console.log("Listen on port",port));