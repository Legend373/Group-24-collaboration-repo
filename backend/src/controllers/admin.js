const Order = require('../models/Order');
const Product = require('../models/Product');
const PDFDocument = require('pdfkit');

async function overview(req, res) {
  const since = new Date(Date.now() - 30*24*3600*1000);
  const orders = await Order.find({ adminId: req.user._id, createdAt: { $gte: since } });
  const revenue = orders.filter(o => ['paid','shipped','delivered'].includes(o.status)).reduce((s,o)=>s+o.amount,0);
  const byCategory = await Product.aggregate([
    { $match: { adminId: req.user._id } },
    { $group: { _id: '$category', count: { $sum: 1 } } }
  ]);
  res.json({ revenue, orders: orders.length, byCategory });
}

async function weeklyReport(req, res) {
  const doc = new PDFDocument();
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="weekly-report.pdf"');
  doc.text('YegnaFarm Weekly Report', { align: 'center' });
  doc.moveDown().text('This is a minimal demo PDF.');
  doc.end();
  doc.pipe(res);
}

module.exports = { overview, weeklyReport };
