// Payment Schema (Trusted Auto Split)
const paymentSchema = new mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },

    farmer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    agent: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    totalPaid: { type: Number, required: true },

    farmerShare: { type: Number, required: true }, // base price
    agentShare: { type: Number, required: true },  // commission + delivery

    status: { type: String, enum: ["processing", "completed", "failed"], default: "processing" },

    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Payment", paymentSchema);
