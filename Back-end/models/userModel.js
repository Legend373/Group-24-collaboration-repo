/* const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        unique: function () { return this.role !== 'farmer'; },
        required: function () { return this.role !== 'farmer'; }
    },
    password: {
        type: String,
        required: function () { return this.role !== 'farmer'; }
    },

    role: { type: String, enum: ['agent', 'admin', 'buyer', 'farmer'], required: true },
    phone: { type: String, required: true },
    region: { type: String,  },
    cartData: { type: Object, default: {} },
    firstLogin: { type: Boolean, default: true },
    walletBalance: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },

    // ✅ Only relevant for agents
    agentDetails: {
        kycId: { type: String },
        cooperativeName: { type: String },
        gpsLocation: { type: String },
        verified: { type: Boolean, default: false }
    },



}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (this.role === 'farmer') return next();
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Compare password method
userSchema.methods.matchPassword = function (password) {
    return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
 */