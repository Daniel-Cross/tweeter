const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

app.use(function(req, res, next) {
	let error = new Error('Not Found');
	error.status = 404;
	next(err);
});

app.listen(PORT, function() {
	console.log(`Server is listening on ${PORT}`);
});
