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



app.get('/comments/:url', async (req, res) => {
	console.log('get request')

	const pages = await database.getDbComments(req.params.url)

	res.json(pages);
});



app.post('/comments', async (req, res) => {
	console.log('post request')
	
	const rows = await database.postDbComments(req.body.url, req.body.commentText)
	console.log('Comment posted.')

	res.json(rows)

});


app.listen(port, host, () => {
	console.log(`Started server on http:\\\\${host}:${port}`)
})