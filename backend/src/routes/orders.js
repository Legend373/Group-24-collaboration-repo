const { Router } = require('express');
const { requireAuth, requireRole } = require('../middleware/auth');
const ctrl = require('../controllers/orders');
const router = Router();

router.use(requireAuth);
router.get('/', ctrl.list);
router.post('/', requireRole('buyer'), ctrl.create);
router.patch('/:id/status', ctrl.setStatus);

module.exports = router;
