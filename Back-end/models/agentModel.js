// models/agentModel.js
const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    region: { type: String, required: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    firstLogin: { type: Boolean, default: true },
    otp: { type: String }, // optional temporary OTP for email notification
    performanceScore: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Agent", agentSchema);
