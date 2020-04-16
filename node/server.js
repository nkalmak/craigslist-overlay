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


var pages = [
	{
		url: 1, comment: [
			"comment1",
			"comment2",
			"comment2",
			"comment2",
			"comment2",
			"comment2",
			"comment435",
			"comment3",
			"U FUKING WAT M8"
		]
	},
	{ url: 2, comment: ["comment1", "comment2"] },
	{ url: 3, comment: ["comment1", "comment2"] },
]

app.get('/comments/:url', (req, res) => {
	const page = pages.find(c => c.url === parseInt(req.params.url));
	for (let index = 0; index < 10000; index++) {
		pages[0].comment.push("new comment")

	}
	if (!page) res.status(404).send('Comments for the given URL were not found.');
	res.json(JSON.stringify(page.comment));

});


{
	pages.push({ url: 6, comment: ["comment1", "comment2"] })
}

// app.get('/addcomment', (req, res) => {
// 	console.log("Recieved post " + req.body);
// 	console.log(req.body.msg)
// 	let server_message +=  req.body.msg
// 	if (server_message.length > 1000) {
// 		server_message = server_message.slice(50, -1)
// 	}
// 	res.send(server_message)
// });



app.listen(port, host, () => {
	console.log(`Started server on http:\\\\${host}:${port}`)
})