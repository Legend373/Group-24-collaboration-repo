const { Router } = require('express');
const { register, login, refresh, logout } = require('../controllers/auth');
const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/refresh', refresh);
router.post('/logout', logout);

module.exports = router;
