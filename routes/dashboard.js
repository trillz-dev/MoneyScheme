const path = require("path");

const express = require("express");

const dashboardController = require("../controller/dashboard");

const router = express.Router();

router.get("/main", dashboardController.main);

router.get("/transaction", dashboardController.transactions);

router.get("/investment", dashboardController.investments);

router.get("/settings", dashboardController.settings);

router.get("/support", dashboardController.support);




module.exports = router;
