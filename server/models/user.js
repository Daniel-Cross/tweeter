const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		require: true,
		unique: true,
	},
	username: {
		type: String,
		require: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	imgUrl: {
		type: String,
	},
});

userSchema.pre(
	'save',
	(hashPassword = (next) => {
		if (!this.isModified('password')) {
			return next;
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

userSchema.methods.validatePassword = validatePassword = (password) => {
	return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
