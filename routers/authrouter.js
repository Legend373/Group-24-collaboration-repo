const express = require('express');
const authcontroller = require('../controllers/authcontroller')
const router = express.Router();

router.post('/signup', authcontroller.signup);

module.exports = router;