// routes/authRoutes.js
const express = require('express');
const authController = require('../controllers/authController');
const { validateInput, checkValidation } = require('../middlewares/validateMiddleware');
const router = express.Router();

const registerValidation = [...validateInput('register'), checkValidation];
const loginValidation = [...validateInput('login'), checkValidation];
router.post('/register', registerValidation, authController.register);
router.post('/login', loginValidation, authController.login);


router.post('/refresh-token', authController.refresh);
router.post('/logout', authController.logout);
//router.post('/create-admin', authController.createAdmin)



module.exports = router;