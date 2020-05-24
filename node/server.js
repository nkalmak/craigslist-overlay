#!/usr/bin/env nodejs

const port = 8080
const host = 'localhost'

const express = require('express');
const cors = require('cors');
const app = express();
const database = require('./database');


// This for parsing body data. 
// (don't forget to add application/json to request header)
app.use(express.json());


// app.use(cors({credentials: true, origin: true}));
app.use(cors());


// console.log(database.getDbComments())

// var pages = [
// 	{
// 		url: 1, comments: [
// 			"comment1",
// 		]
// 	},
// 	{ url: 2, comments: ["comment1", "comment2","commenasd","asdsadsad"] },
// 	{ url: 3, comments: ["comment1", "comment2"] },
// ]

app.get('/comments/:url', async (req, res) => {
	const pages = await database.getDbComments(req.params.url)
	// const page = pages.find(c => c.url === parseInt(req.params.url));
	// if (!page) res.status(404).send('Comments for the given URL were not found.');
	res.json(pages);
});



app.post('/comments', (req, res) => {
	// if (error) {
	//   res.status(400).send(result.error.details[0].message);
	//   return;
	// }
	// const page = pages.find(c => c.url === parseInt(req.body.url));


	// if (!page) {
	// 	const newPage = {
	// 		comments: [req.body.commentText],
	// 		url: req.body.url
	// 	};
	// 	pages.push(newPage);
	// }

	// else {
	// 	page.comments.push(req.body.commentText);
	// }
	database.postDbComments(req.body.url, req.body.commentText, req.body.commentID)
	console.log('Comment posted.')

	res.sendStatus(200)

});




// {
// 	pages.push({ url: 6, comment: ["comment1", "comment2"] })
// }

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