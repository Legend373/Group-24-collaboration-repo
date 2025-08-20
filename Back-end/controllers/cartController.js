const userModel = require("../models/userModel.js");

exports.addToCart = async (req, res) => {
    try {
        const { itemId } = req.body;
        const userData = req.user; // <-- use req.user from middleware

        let cartData = userData.cartData || {}; // initialize if null

        if (!cartData[itemId]) {
            cartData[itemId] = 1;
        } else {
            cartData[itemId] += 1;
        }

        userData.cartData = cartData;
        await userData.save();

        res.json({ success: true, message: "Added to cart", cartData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.removeFromCart = async (req, res) => {
    try {
        const { itemId } = req.body;
        const userData = req.user;

        let cartData = userData.cartData || {};

        if (cartData[itemId] && cartData[itemId] > 0) {
            cartData[itemId] -= 1;
            if (cartData[itemId] === 0) delete cartData[itemId];
        }

        userData.cartData = cartData;
        await userData.save();

        res.json({ success: true, message: "Removed from the cart", cartData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.getCart = async (req, res) => {
    try {
        const userData = req.user;
        const cartData = userData.cartData || {};

        res.json({ success: true, cartData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
