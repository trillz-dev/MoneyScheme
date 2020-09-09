const path = require('path');

const express = require('express');

const registerController = require('../controller/register');

const router = express.Router();


router.post('/sign-up', registerController.register)



