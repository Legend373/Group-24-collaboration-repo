const Order = require('../models/Order');

async function expirePendingOrders() {
  const now = new Date();
  const res = await Order.updateMany(
    { status: 'pending', expiresAt: { $lte: now } },
    { $set: { status: 'expired' } }
  );
  if (res.modifiedCount) console.log('Expired orders:', res.modifiedCount);
}
module.exports = { expirePendingOrders };
