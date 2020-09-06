const path = require('path');

const express = require('express');

const mainsiteController = require('../controller/mainsite');

const router = express.Router();


router.get('/', mainsiteController.home);

router.get('/about', mainsiteController.about);

router.get('/faqs', mainsiteController.faq);

router.get('/login', mainsiteController.login);

// router.get('/', mainsiteController.signup);



module.exports = router;
