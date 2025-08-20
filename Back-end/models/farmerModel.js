const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    region: { type: String, required: true },
    farmSize: { type: String },
    crops: { type: [String], default: [] },
    walletBalance: { type: Number, default: 0 },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // agent ID
}, { timestamps: true });

module.exports = mongoose.model('Farmer', farmerSchema);
