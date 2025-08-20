const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },

    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true }, // product.finalPrice * qty

    paymentStatus: { type: String, enum: ["pending", "paid", "failed"], default: "pending" },
    orderStatus: { type: String, enum: ["pending", "accepted", "shipped", "delivered"], default: "pending" },

    // Auto-splitting
    farmerAmount: { type: Number, default: 0 },
    agentAmount: { type: Number, default: 0 },

    createdAt: { type: Date, default: Date.now }
});

// Before saving, calculate payment split
orderSchema.pre("save", async function (next) {
    const Product = require("./Product");
    const product = await Product.findById(this.product);

    if (product) {
        this.totalPrice = product.finalPrice * this.quantity;
        this.farmerAmount = product.basePrice * this.quantity;
        this.agentAmount = (product.commissionAmount + product.deliveryAmount) * this.quantity;
    }
    next();
});
