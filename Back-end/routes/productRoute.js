const express = require("express");
const upload = require("../middlewares/multer");
const { verifyToken, } = require("../middlewares/authMiddleware");
const { createProduct, getProducts, getProductById, updateProduct, deleteProduct, } = require("../controllers/productController");

const router = express.Router();

router.post("/", verifyToken, upload.single("image"), createProduct); // Add product with image
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", upload.single("image"), updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
