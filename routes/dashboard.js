const path = require("path");

const express = require("express");

const dashboardController = require("../controller/dashboard");

const router = express.Router();

// router.get("/", dashboardController.main);

router.get("/transactions", dashboardController.transactions);

router.get("/investments", dashboardController.investments);

router.get("/settings", dashboardController.settings);

// router.get('/', dashboardController.active);
// router.get('/investments', dashboardController.investments);

// router.get('/settings', dashboardController.settings);

module.exports = router;
