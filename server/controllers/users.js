const User = require('../models/user');

const index = (req, res) => {
	User.find()
		.then((users) => {
			res.status(200).json(users);
		})
		.catch((error) => {
			console.log(error);
			res.sendStatus(500);
		});
};

const create = (req, res) => {
	const user = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
		img: req.body.img,
	});
	user
		.save()
		.then((data) => {
			res.status(201).json(data);
		})
		.catch((error) => {
			console.log(error);
			res.sendStatus(500);
		});
};

module.exports = { index, create };
