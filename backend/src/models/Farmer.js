const { Schema, model, Types } = require('mongoose');

const FarmerSchema = new Schema({
  adminId: { type: Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  farmType: String,
  location: { country: String, region: String, city: String, lat: Number, lng: Number },
  bio: String,
  status: { type: String, enum: ['pending','approved','suspended'], default: 'pending' }
}, { timestamps: true });

module.exports = model('Farmer', FarmerSchema);
