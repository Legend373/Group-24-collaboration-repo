const Order = require('../models/Order');
const Product = require('../models/Product');

async function create(req, res) {
  const { productId, quantity } = req.body;
  const product = await Product.findById(productId);
  if (!product) return res.status(400).json({ error: 'Invalid productId' });
  const amount = Number(quantity) * product.price;
  const expiresAt = new Date(Date.now() + 60*60*1000); // 1h

  const order = await Order.create({ buyerId: req.user._id, productId, adminId: product.adminId, quantity, amount, expiresAt });
  if (global._io) global._io.emit('order:created', { id: order._id.toString(), productId });
  res.status(201).json(order);
}

async function list(req, res) {
  const role = req.user.role;
  const filter = role === 'buyer' ? { buyerId: req.user._id } : { adminId: req.user._id };
  const items = await Order.find(filter).sort('-createdAt').lean();
  res.json(items);
}

async function setStatus(req, res) {
  const { status } = req.body;
  const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
  if (!order) return res.status(404).json({ error: 'Not found' });
  res.json(order);
}

module.exports = { create, list, setStatus };
