const { Schema, model } = require('mongoose');

const RefreshTokenSchema = new Schema({
  tokenHash: { type: String, required: true },
  device: String,
  lastUsedAt: { type: Date, default: Date.now }
}, { _id: false });

const UserSchema = new Schema({
  role: { type: String, enum: ['buyer','admin'], required: true },
  email: { type: String, unique: true, sparse: true },
  phone: { type: String, unique: true, sparse: true },
  passwordHash: { type: String, required: true },
  name: { type: String, required: true },
  location: { country: String, region: String, city: String, lat: Number, lng: Number },
  status: { type: String, enum: ['active','suspended'], default: 'active' },
  refreshTokens: { type: [RefreshTokenSchema], default: [] }
}, { timestamps: true });

module.exports = model('User', UserSchema);
