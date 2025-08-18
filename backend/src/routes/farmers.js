const { Router } = require('express');
const { requireAuth, requireRole } = require('../middleware/auth');
const ctrl = require('../controllers/farmers');
const router = Router();

router.use(requireAuth, requireRole('admin'));
router.post('/', ctrl.create);
router.get('/', ctrl.list);
router.patch('/:id', ctrl.patch);

module.exports = router;
