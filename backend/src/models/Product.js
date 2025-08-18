const { Schema, model, Types } = require('mongoose');

const ImageSchema = new Schema({
  url: String,
  publicId: String
}, { _id: false });

const ProductSchema = new Schema({
  farmerId: { type: Types.ObjectId, ref: 'Farmer', required: true },
  adminId: { type: Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  category: { type: String, enum: ['grains','vegetables','fruits','livestock','dairy','others'], required: true },
  price: { type: Number, required: true },
  unit: { type: String, enum: ['kg','ton','crate','bag','unit'], required: true },
  images: { type: [ImageSchema], default: [] },
  quantity: { type: Number, default: 0 },
  description: String,
  location: { country: String, region: String, city: String, lat: Number, lng: Number },
  status: { type: String, enum: ['active','sold','out_of_stock','inactive'], default: 'active' }
}, { timestamps: true });

ProductSchema.index({ name: 'text', description: 'text' });

module.exports = model('Product', ProductSchema);
