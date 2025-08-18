const Product = require('../models/Product');
const Farmer = require('../models/Farmer');

async function list(req, res) {
  const { q, category, city, sort = '-createdAt', page = 1, limit = 12 } = req.query;
  const filter = { status: 'active' };
  if (category) filter.category = category;
  if (city) filter['location.city'] = city;
  if (q) filter.$text = { $search: q };
  const skip = (Number(page)-1) * Number(limit);
  const [items, total] = await Promise.all([
    Product.find(filter).sort(sort).skip(skip).limit(Number(limit)).lean(),
    Product.countDocuments(filter)
  ]);
  res.json({ items, total, page: Number(page), hasNext: skip + items.length < total });
}

async function getById(req, res) {
  const p = await Product.findById(req.params.id).lean();
  if (!p) return res.status(404).json({ error: 'Not found' });
  res.json(p);
}

async function create(req, res) {
  const { farmerId, name, category, price, unit, quantity = 0, description, images = [], location } = req.body;
  const farmer = await Farmer.findById(farmerId);
  if (!farmer) return res.status(400).json({ error: 'Invalid farmerId' });
  const doc = await Product.create({ farmerId, adminId: req.user._id, name, category, price, unit, quantity, description, images, location });
  res.status(201).json(doc);
}

async function patch(req, res) {
  const updates = req.body;
  const doc = await Product.findByIdAndUpdate(req.params.id, updates, { new: true });
  if (!doc) return res.status(404).json({ error: 'Not found' });
  res.json(doc);
}

async function remove(req, res) {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
}

module.exports = { list, getById, create, patch, remove };
