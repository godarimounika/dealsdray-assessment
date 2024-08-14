const mongoose = require("mongoose")
const express = require('express')
const router = express.Router()
const LoginModel  = require("../Modal/LoginModel")
const {loginUser,registerUser}= require("../Controllers/loginController")


router.post('/register', registerUser);

// Login
router.post('/login', loginUser);
 

module.exports = router