const express = require('express');
const router = express.Router();
const farmerController = require('../controllers/farmerController');
const { verifyToken, agentOnly } = require('../middlewares/authMiddleware');

router.post('/add', verifyToken, agentOnly, farmerController.addFarmer);
router.get('/list', verifyToken, agentOnly, farmerController.listFarmers);
router.patch("/:id", verifyToken, agentOnly, farmerController.updateFarmer);
router.delete("/:id", verifyToken, agentOnly, farmerController.deleteFarmer);

module.exports = router; 
