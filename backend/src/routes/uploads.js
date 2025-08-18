const { Router } = require('express');
const { requireAuth } = require('../middleware/auth');
const { sign } = require('../controllers/uploads');
const router = Router();

router.get('/sign', requireAuth, sign);

module.exports = router;
