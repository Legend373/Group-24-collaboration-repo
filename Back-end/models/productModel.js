const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        description: { type: String, trim: true },
        basePrice: { type: Number, required: true },
        finalPrice: { type: Number },
        category: {
            type: String,
            enum: ["fruit", "vegetable", "grains", "dairy"], // ✅ restrict to these values
            required: true
        },
        farmerId: { type: mongoose.Schema.Types.ObjectId, ref: "Farmer", required: true },
        agentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        deliveryFee: { type: Number, default: 50 },
        commissionPercent: { type: Number, default: 10 },
        status: { type: String, enum: ["available", "pending", "sold"], default: "available" },
        image: { type: String, default: "" },
    },
    { timestamps: true }
);

// Compute finalPrice BEFORE validation, so validation passes 
productSchema.pre('validate', function (next) {
    const base = Number(this.basePrice || 0);
    const fee = Number(this.deliveryFee ?? 50);
    const percent = Number(this.commissionPercent ?? 10);
    const commissionAmount = (base * percent) / 100;
    this.finalPrice = base + commissionAmount + fee;
    next();
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
