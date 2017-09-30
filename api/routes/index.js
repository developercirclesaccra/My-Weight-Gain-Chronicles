const express = require("express");
const foodController = require("../controllers/foodController");
const router = express.Router();
const catchErrors = fn => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

router.post("/add", foodController.add);
module.exports = router;
