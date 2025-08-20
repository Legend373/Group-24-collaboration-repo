const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const User = require("../models/userModel");

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const { product: productId, quantity } = req.body;
        const buyerId = req.user.id;

        if (!productId || !quantity) {
            return res.status(400).json({ success: false, message: "Product and quantity are required" });
        }

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        const order = new Order({
            buyer: buyerId,
            product: productId,
            quantity,
        });

        await order.save();

        res.status(201).json({ success: true, message: "Order created", order });
    } catch (error) {
        console.error("createOrder error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all orders for a specific agent
exports.getOrdersForAgent = async (req, res) => {
    try {
        const agentId = req.user.id;

        // Find orders where the product's agentId matches current agent
        const orders = await Order.find()
            .populate({
                path: "product",
                match: { agentId },
                populate: { path: "farmerId", select: "name" }
            })
            .populate("buyer", "name email");

        // Filter out orders that don’t belong to this agent
        const agentOrders = orders.filter(o => o.product);

        res.status(200).json({ success: true, orders: agentOrders });
    } catch (error) {
        console.error("getOrdersForAgent error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all orders for a buyer
exports.getOrdersForBuyer = async (req, res) => {
    try {
        const buyerId = req.user.id;

        const orders = await Order.find({ buyer: buyerId })
            .populate("product", "name finalPrice image")
            .populate("buyer", "name email");

        res.status(200).json({ success: true, orders });
    } catch (error) {
        console.error("getOrdersForBuyer error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update order status (for agent)
exports.updateOrderStatus = async (req, res) => {
    try {
        const { orderId } = req.params;
        const { orderStatus, paymentStatus } = req.body;

        const order = await Order.findById(orderId);
        if (!order) return res.status(404).json({ success: false, message: "Order not found" });

        if (orderStatus) order.orderStatus = orderStatus;
        if (paymentStatus) order.paymentStatus = paymentStatus;

        await order.save();

        res.status(200).json({ success: true, message: "Order updated", order });
    } catch (error) {
        console.error("updateOrderStatus error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete an order
exports.deleteOrder = async (req, res) => {
    try {
        const { orderId } = req.params;

        const order = await Order.findByIdAndDelete(orderId);
        if (!order) return res.status(404).json({ success: false, message: "Order not found" });

        res.status(200).json({ success: true, message: "Order deleted" });
    } catch (error) {
        console.error("deleteOrder error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

