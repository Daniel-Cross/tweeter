const express = require('express');
const userController = require('../controllers/users');

const router = express.Router();

router.route('/').get(userController.index).post(userController.create);

module.exports = router;
