const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const { auth, users } = require('./routes');

dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/auth', auth);
app.use('/users', users);

mongoose.connect(process.env.DATABASE_CONN, { useNewUrlParser: true }, () => {
	console.log('connected to the database');
	app.listen(8081, () => {
		console.log('server listening on port 8081');
	});
});
