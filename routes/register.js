const path = require('path');

const express = require('express');

const registerController = require('../controller/register');

const router = express.Router();

const User = require('../Models/User')


router.post('/sign-up', registerController.register);

// router.post('/login', registerController.login)


module.exports = router



