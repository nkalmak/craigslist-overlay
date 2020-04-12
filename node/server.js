#!/usr/bin/env nodejs

const port = 8080
const host = 'localhost'

const express = require('express');
const cors = require('cors');
const app = express();

// This for parsing body data. 
// (don't forget to add application/json to request header)
app.use(express.json());


// app.use(cors({credentials: true, origin: true}));
app.use(cors());
 

/* Should receive a comment and url
// body{
	url:"craigslist.com/asdsadsad",
	comment:"Fake ad, don't text"
}
*/

app.post('/addcomment',(req,res)=>{
	console.log("Recieved post "+ req.body);
	console.log(req.body.msg)
	server_message += req.body.msg
	if(server_message.length > 1000){
		server_message = server_message.slice(50,-1)
	}
	res.send(server_message)
});

app.listen(port,host,()=>{
	console.log(`Started server on http:\\\\${host}:${port}`)
})