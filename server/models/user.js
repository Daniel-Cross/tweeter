const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	username: String,
	email: String,
	password: String,
	img: String,
});

userSchema.pre(
	'save',
	(hashPassword = (next) => {
		if (!this.isModified('password')) {
			return next();
		}
		return bcrypt.hash(this.password, 10, (error, hash) => {
			if (error) {
				return next(error);
			}
			this.password = hash;
			return next();
		});
	})
);

userSchema.methods.validatePassword = function validatePassword(password) {
	return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
