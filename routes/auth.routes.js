const express = require("express");
const router = express.Router();

const authentication = require("../security/auth.security");

router.post("/register", authentication.registerUser);

router.post("/login", authentication.loginUser);
module.exports = router;