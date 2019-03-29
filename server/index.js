const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const errorHandler = require('./handlers/error');

app.use(express.json());

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
	let err = new Error('NOT FOUND');
	err.status = 404;
	next(err);
});

app.use(errorHandler);

mongoose.connect(process.env.DATABASE_CONN, { useNewUrlParser: true }, () => {
	console.log('connected to the database');
	app.listen(8081, () => {
		console.log('server listening on port 8081');
	});
});
