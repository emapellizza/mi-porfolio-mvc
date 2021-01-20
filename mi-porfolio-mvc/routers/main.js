Const express = require(‘express’)
Const router = express.Router();
const { Router } = require("express");

const homeController =require("../controllers/mainController.js");

router.get("/",mainController.home);

module.exports = router;


