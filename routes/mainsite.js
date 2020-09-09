const path = require('path');

const express = require('express');

const mainsiteController = require('../controller/mainsite');

const registerController = require('../controller/register');

const router = express.Router();


router.get('/', mainsiteController.home);

router.get('/about', mainsiteController.about);

router.get('/faqs', mainsiteController.faq);

router.get('/login', mainsiteController.login);

router.get('/sign-up', mainsiteController.signup);

// router.post('/sign-up', registerController.register);

router.get('/policy', mainsiteController.policy);

// router.get('/bank', mainsiteController.bank);



module.exports = router;
