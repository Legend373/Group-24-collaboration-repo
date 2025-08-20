const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/authMiddleware");
const {
    createAgent,
    getAgents,
    updateAgent,
    deleteAgent,
    changePassword
} = require("../controllers/agentController");

router.post("/", verifyToken, createAgent);
router.get("/", verifyToken, getAgents);
router.patch("/:id", verifyToken, updateAgent);
router.delete("/:id", verifyToken, deleteAgent);
router.put("/change-password", verifyToken, changePassword);

module.exports = router;
