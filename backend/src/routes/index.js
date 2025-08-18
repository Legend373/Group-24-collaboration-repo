const { Router } = require('express');
const auth = require('./auth');
const products = require('./products');
const farmers = require('./farmers');
const orders = require('./orders');
const reviews = require('./reviews');
const uploads = require('./uploads');
const admin = require('./admin');
const webhooks = require('./webhooks');

const router = Router();
router.use('/auth', auth);
router.use('/products', products);
router.use('/farmers', farmers);
router.use('/orders', orders);
router.use('/reviews', reviews);
router.use('/uploads', uploads);
router.use('/admin', admin);
router.use('/webhooks', webhooks);

module.exports = { router };
