const express = require("express");
const foodController = require('../controllers/foodController');
const router = express.Router();

router.post('/add',foodController.add)
module.exports = router;
