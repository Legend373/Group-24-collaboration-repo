
const express = require("express");
const router = express.Router();
const { createOrder, getOrdersForAgent, getOrdersForBuyer, updateOrderStatus, deleteOrder } = require("../controllers/orderController");
const { verifyToken, isAgent } = require("../middlewares/authMiddleware");

router.post("/", verifyToken, createOrder);
router.get("/agent", verifyToken, getOrdersForAgent);
router.get("/buyer", verifyToken, getOrdersForBuyer);
//router.put("/:id/status", verifyToken, isAgent, updateOrderStatus);
router.delete("/:id", verifyToken, deleteOrder);

module.exports = router;
