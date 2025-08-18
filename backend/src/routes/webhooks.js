const { Router } = require('express');
const { stripeWebhook } = require('../controllers/webhooks');
const router = Router();

router.post('/stripe', stripeWebhook);

module.exports = router;
