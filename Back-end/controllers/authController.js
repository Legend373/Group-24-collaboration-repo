
// controllers/authController.js
const User = require('../models/userModel');
const { generateAccessToken, generateRefreshToken } = require('../utils/generateToken');
const jwt = require('jsonwebtoken');


// REGISTER
const register = async (req, res) => {
    const { name, email, password, phone, region } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({ success: false, message: "User already exists" });

        const user = await User.create({ name, email, password, role: "buyer", phone, region });

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",        // must be false for dev (http)
            sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",      // Lax works for localhost
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.status(201).json({ accessToken, user });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// LOGIN




const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Use the schema method to compare password
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        // Set refresh token as httpOnly cookie
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({ accessToken, user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// REFRESH
const refresh = async (req, res) => {
    const oldRefreshToken = req.cookies.refreshToken;
    if (!oldRefreshToken) {
        return res.status(401).json({ message: "No refresh token" });
    }

    try {
        const payload = jwt.verify(oldRefreshToken, process.env.JWT_REFRESH_SECRET);

        const user = await User.findById(payload.id).select("-password");
        if (!user) {
            return res.status(403).json({ message: "User no longer exists" });
        }

        const newAccessToken = generateAccessToken(user);
        const newRefreshToken = generateRefreshToken(user);

        // Rotate refresh token to avoid reuse
        res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.status(200).json({ accessToken: newAccessToken, user });
    } catch (err) {
        console.error("Refresh token error:", err.message);
        res.status(403).json({ message: "Invalid refresh token" });
    }
};

// LOGOUT
const logout = (req, res) => {
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: false, // false for dev
        sameSite: "Lax"
    });
    res.json({ message: 'Logged out successfully' });
};

module.exports = { register, login, refresh, logout };

