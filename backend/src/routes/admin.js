const { Router } = require('express');
const { requireAuth, requireRole } = require('../middleware/auth');
const { overview, weeklyReport } = require('../controllers/admin');
const router = Router();

router.use(requireAuth, requireRole('admin'));
router.get('/analytics/overview', overview);
router.get('/reports/weekly', weeklyReport);

module.exports = router;
