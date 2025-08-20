const bcrypt = require("bcryptjs");
const User = require('../models/userModel');
const sendMail = require("../utils/mail");
const { generateAccessToken, generateRefreshToken } = require('../utils/generateToken');
const jwt = require('jsonwebtoken');

// Create Agent
exports.createAgent = async (req, res) => {
    const { name, email, phone, region } = req.body;
    try {
        const existingAgent = await User.findOne({ email, role: "agent" });
        if (existingAgent) {
            return res.status(400).json({ success: false, message: "Agent already exists" });
        }

        // Temporary password (plain text)
        const tempPassword = Math.random().toString(36).slice(-10);

        const agent = await User.create({
            name,
            email,
            password: tempPassword,
            role: "agent",
            phone,
            region,
            firstLogin: true
        });

        try {
            await sendMail(
                agent.email,
                "Your Agent Account Credentials",
                `<p>Hello ${agent.name},</p>
                 <p>Your agent account has been created.</p>
                 <p><b>Email:</b> ${agent.email}</p>
                 <p><b>Temporary Password:</b> ${tempPassword}</p>
                 <p>Please log in and change your password immediately.</p>`
            );
        } catch (err) {
            console.error("Failed to send agent email:", err);
        }

        res.status(201).json({ success: true, data: agent });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Change password for agent (first login or later)
exports.changePassword = async (req, res) => {
    const { agentId, newPassword } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        const agent = await User.findOneAndUpdate(
            { _id: agentId, role: "agent" },
            { password: hashedPassword, firstLogin: false },
            { new: true }
        );

        if (!agent) return res.status(404).json({ success: false, message: "Agent not found" });

        // Generate new tokens
        const accessToken = generateAccessToken(agent);
        const refreshToken = generateRefreshToken(agent);

        // Set refresh cookie
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: false,      // false for dev
            sameSite: "Lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.json({
            success: true,
            message: "Password updated successfully",
            accessToken,
            user: agent
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


// List all agents
exports.getAgents = async (req, res) => {
    try {
        const agents = await User.find({ role: "agent" });
        res.json({ success: true, data: agents });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Update agent
exports.updateAgent = async (req, res) => {
    try {
        const updateData = { ...req.body };
        if (updateData.password) {
            updateData.password = await bcrypt.hash(updateData.password, 10);
        }

        const agent = await User.findOneAndUpdate(
            { _id: req.params.id, role: "agent" },
            updateData,
            { new: true }
        );

        if (!agent) return res.status(404).json({ success: false, message: "Agent not found" });

        res.json({ success: true, data: agent });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// Delete agent
exports.deleteAgent = async (req, res) => {
    try {
        const agent = await User.findOneAndDelete({ _id: req.params.id, role: "agent" });
        if (!agent) return res.status(404).json({ success: false, message: "Agent not found" });
        res.json({ success: true, message: "Agent deleted successfully" });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};
