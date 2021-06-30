const express = require('express');
const controller = require('../controllers/auth')
const router = express.Router();

router.post('/login', controller.login);
//localhost:5000/api/auth/login

router.post('/register', controller.register);
//localhost:5000/api/auth/register


module.exports = router;