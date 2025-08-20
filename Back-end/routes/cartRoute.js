const express = require("express");

const { addToCart, removeFromCart, getCart } = require("../controllers/cartController");
const { verifyToken } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/add", verifyToken, addToCart);
router.post("/remove", verifyToken, removeFromCart);
router.get("/get", verifyToken, getCart);

module.exports = router;


