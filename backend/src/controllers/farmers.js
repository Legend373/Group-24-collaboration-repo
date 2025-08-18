const Farmer = require('../models/Farmer');

async function create(req, res) {
  const { name, farmType, location } = req.body;
  const farmer = await Farmer.create({ adminId: req.user._id, name, farmType, location, status: 'approved' });
  res.status(201).json(farmer);
}
async function list(req, res) {
  const { status } = req.query;
  const filter = { adminId: req.user._id };
  if (status) filter.status = status;
  const items = await Farmer.find(filter).lean();
  res.json(items);
}
async function patch(req, res) {
  const updates = req.body;
  const doc = await Farmer.findByIdAndUpdate(req.params.id, updates, { new: true });
  if (!doc) return res.status(404).json({ error: 'Not found' });
  res.json(doc);
}
module.exports = { create, list, patch };
