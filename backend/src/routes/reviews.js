const { Router } = require('express');
const { requireAuth, requireRole } = require('../middleware/auth');
const ctrl = require('../controllers/reviews');
const router = Router();

router.get('/', ctrl.list);
router.post('/', requireAuth, requireRole('buyer'), ctrl.create);

module.exports = router;
