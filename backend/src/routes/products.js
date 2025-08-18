const { Router } = require('express');
const { requireAuth, requireRole } = require('../middleware/auth');
const ctrl = require('../controllers/products');
const router = Router();

router.get('/', ctrl.list);
router.get('/:id', ctrl.getById);
router.post('/', requireAuth, requireRole('admin'), ctrl.create);
router.patch('/:id', requireAuth, requireRole('admin'), ctrl.patch);
router.delete('/:id', requireAuth, requireRole('admin'), ctrl.remove);

module.exports = router;
