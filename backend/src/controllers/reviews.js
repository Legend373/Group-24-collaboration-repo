const Review = require('../models/Review');
const Order = require('../models/Order');

async function create(req, res) {
  const { productId, rating, comment } = req.body;
  const delivered = await Order.findOne({ productId, buyerId: req.user._id, status: 'delivered' });
  if (!delivered) return res.status(400).json({ error: 'You can only review delivered orders' });
  const doc = await Review.create({ buyerId: req.user._id, productId, rating, comment });
  res.status(201).json(doc);
}
async function list(req, res) {
  const { productId } = req.query;
  const items = await Review.find(productId ? { productId } : {}).sort('-createdAt').lean();
  res.json(items);
}
module.exports = { create, list };
