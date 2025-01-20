const express = require("express");
const router = express.Router();

const { signup } = require("../controllers/userController.js");

console.log(signup);

router.post("/signup", signup);

module.exports = router;
