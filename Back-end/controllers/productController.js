const Product = require('../models/productModel');
const Farmer = require('../models/farmerModel');
const cloudinary = require('../config/cloudinary');


// Add New Product
const createProduct = async (req, res) => {
    try {
        // console.log("req.user:", req.user);
        // console.log("req.body:", req.body);
        // console.log("req.file:", req.file);

        // Ensure req.user exists
        if (!req.user || !req.user.id) {
            return res.status(401).json({ success: false, message: "Unauthorized: no user found" });
        }

        const agentId = req.user.id;
        const { name, description, basePrice, farmerName, category } = req.body;

        // Validate required fields
        if (!name || !basePrice || !farmerName || !category) {
            return res.status(400).json({
                success: false,
                message: "Name, basePrice, farmerName, and category are required",
            });
        }

        // Find farmer by exact name (case-insensitive)
        const farmer = await Farmer.findOne({ name: { $regex: new RegExp(`^${farmerName}$`, "i") } });
        if (!farmer) {
            return res.status(404).json({
                success: false,
                message: `Farmer "${farmerName}" not found`,
            });
        }

        // Parse basePrice
        const base = Number(basePrice);
        if (isNaN(base)) {
            return res.status(400).json({ success: false, message: "Base price must be a valid number" });
        }

        // Handle image upload
        let imageUrl = "";
        if (req.file) {
            try {
                const result = await cloudinary.uploader.upload(req.file.path, { folder: "products" });
                imageUrl = result.secure_url;
            } catch (uploadError) {
                console.error("Cloudinary upload error:", uploadError);
                return res.status(500).json({
                    success: false,
                    message: "Image upload failed",
                    error: uploadError.message,
                });
            }
        }

        // Create product
        const product = new Product({
            name,
            description,
            basePrice: base,
            farmerId: farmer._id,
            agentId,
            category,
            image: imageUrl,
        });

        await product.save();

        return res.status(201).json({
            success: true,
            message: "Product created successfully",
            product,
        });

    } catch (error) {
        console.error("createProduct error:", error);
        return res.status(500).json({
            success: false,
            message: "Error creating product",
            error: error.message,
        });

    }
};


// Get All Products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate("farmerId agentId");
        return res.status(200).json({ success: true, products });
    } catch (error) {
        console.error("getProducts error:", error);
        return res.status(500).json({ success: false, message: "Error fetching products", error: error.message });
    }
};

// Get Single Product
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate("farmerId agentId");
        if (!product) return res.status(404).json({ success: false, message: "Product not found" });
        return res.status(200).json({ success: true, product });
    } catch (error) {
        console.error("getProductById error:", error);
        return res.status(500).json({ success: false, message: "Error fetching product", error: error.message });
    }
};

// Update Product
const updateProduct = async (req, res) => {
    try {
        let imageUrl;
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path, { folder: "products" });
            imageUrl = result.secure_url;
        }

        const updates = { ...req.body };
        if (imageUrl) updates.image = imageUrl;

        // If farmerName was provided, translate to farmerId
        if (updates.farmerName) {
            const farmer = await Farmer.findOne({ name: updates.farmerName });
            if (!farmer) return res.status(404).json({ success: false, message: "Farmer not found" });
            updates.farmerId = farmer._id;
            delete updates.farmerName;
        }

        // Recompute finalPrice on updates if any price-relevant field is changing
        if (updates.basePrice || updates.deliveryFee || updates.commissionPercent) {
            const existing = await Product.findById(req.params.id);
            if (!existing) return res.status(404).json({ success: false, message: "Product not found" });

            const base = Number(updates.basePrice ?? existing.basePrice);
            const fee = Number(updates.deliveryFee ?? existing.deliveryFee);
            const percent = Number(updates.commissionPercent ?? existing.commissionPercent);
            updates.finalPrice = base + (base * percent) / 100 + fee;
        }

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            updates,
            { new: true, runValidators: true }
        );

        if (!product) return res.status(404).json({ success: false, message: "Product not found" });

        return res.status(200).json({ success: true, message: "Product updated successfully", product });
    } catch (error) {
        console.error("updateProduct error:", error);
        return res.status(500).json({ success: false, message: "Error updating product", error: error.message });
    }
};

// Delete Product
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ success: false, message: "Product not found" });
        return res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        console.error("deleteProduct error:", error);
        return res.status(500).json({ success: false, message: "Error deleting product", error: error.message });
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
