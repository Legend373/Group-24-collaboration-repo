const { Schema, model, Types } = require('mongoose');

const LogisticsSchema = new Schema({
  carrier: String,
  trackingNumber: String,
  history: [{ status: String, note: String, at: { type: Date, default: Date.now } }]
}, { _id: false });

const OrderSchema = new Schema({
  buyerId: { type: Types.ObjectId, ref: 'User', required: true },
  productId: { type: Types.ObjectId, ref: 'Product', required: true },
  adminId: { type: Types.ObjectId, ref: 'User', required: true },
  quantity: { type: Number, required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['pending','accepted','rejected','paid','shipped','delivered','expired','disputed'], default: 'pending' },
  payment: {
    provider: { type: String, enum: ['stripe','local'], default: 'local' },
    intentId: String,
    reference: String,
    status: { type: String, enum: ['unpaid','authorized','paid','refunded','failed'], default: 'unpaid' }
  },
  logistics: { type: LogisticsSchema },
  expiresAt: Date
}, { timestamps: true });

module.exports = model('Order', OrderSchema);
