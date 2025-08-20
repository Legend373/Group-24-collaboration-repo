const Farmer = require('../models/farmerModel');

// Add a new farmer (agent action)
exports.addFarmer = async (req, res) => {
    try {
        const { name, phone, region, farmSize, crops } = req.body;
        const agentId = req.user._id;

        if (!name || !phone || !region) {
            return res.status(400).json({ success: false, message: "Name, phone, and region are required" });
        }

        const existing = await Farmer.findOne({ phone });
        if (existing) {
            return res.status(400).json({ success: false, message: "Phone number already exists" });
        }

        const farmer = await Farmer.create({
            name,
            phone,
            region,
            farmSize: farmSize || '',
            crops: Array.isArray(crops) ? crops : (crops ? crops.split(',').map(c => c.trim()) : []),
            createdBy: agentId
        });
        console.log("REQ.USER:", req.user); // Debug
        console.log("REQ.BODY:", req.body);
        console.log("REQ.FILE:", req.file);

        res.status(201).json({ success: true, farmer });
    } catch (error) {
        console.error("Add Farmer Error:", error);
        res.status(400).json({ success: false, message: error.message });
    }
};

// List all farmers created by the agent
exports.listFarmers = async (req, res) => {
    try {
        const agentId = req.user._id;

        const farmers = await Farmer.find({ createdBy: agentId }).sort({ createdAt: -1 });

        res.status(200).json({ success: true, farmers });
    } catch (error) {
        console.error("List Farmers Error:", error);
        res.status(400).json({ success: false, message: error.message });
    }
};

// Update a farmer
exports.updateFarmer = async (req, res) => {
    try {
        const { id } = req.params;
        const agentId = req.user._id;

        const farmer = await Farmer.findOne({ _id: id, createdBy: agentId });
        if (!farmer) return res.status(404).json({ success: false, message: "Farmer not found" });

        const { name, phone, region, farmSize, crops } = req.body;

        if (phone && phone !== farmer.phone) {
            const exists = await Farmer.findOne({ phone });
            if (exists) return res.status(400).json({ success: false, message: "Phone number already exists" });
        }

        farmer.name = name || farmer.name;
        farmer.phone = phone || farmer.phone;
        farmer.region = region || farmer.region;
        farmer.farmSize = farmSize || farmer.farmSize;
        farmer.crops = Array.isArray(crops) ? crops : (crops ? crops.split(',').map(c => c.trim()) : farmer.crops);

        await farmer.save();

        res.status(200).json({ success: true, farmer });
    } catch (error) {
        console.error("Update Farmer Error:", error);
        res.status(400).json({ success: false, message: error.message });
    }
};

// Delete a farmer
exports.deleteFarmer = async (req, res) => {
    try {
        const { id } = req.params;
        const agentId = req.user._id;

        const farmer = await Farmer.findOne({ _id: id, createdBy: agentId });
        if (!farmer) return res.status(404).json({ success: false, message: "Farmer not found" });

        await farmer.remove();

        res.status(200).json({ success: true, message: "Farmer deleted successfully" });
    } catch (error) {
        console.error("Delete Farmer Error:", error);
        res.status(400).json({ success: false, message: error.message });
    }
};
