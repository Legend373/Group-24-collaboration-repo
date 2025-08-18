const { Schema, model, Types } = require('mongoose');

const ReviewSchema = new Schema({
  buyerId: { type: Types.ObjectId, ref: 'User', required: true },
  productId: { type: Types.ObjectId, ref: 'Product', required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: String
}, { timestamps: true });

ReviewSchema.index({ buyerId: 1, productId: 1 }, { unique: true });

module.exports = model('Review', ReviewSchema);
