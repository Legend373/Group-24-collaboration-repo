const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Verify JWT and attach user to req
exports.verifyToken = async (req, res, next) => {
    try {
        const token =
            req.cookies?.accessToken ||
            req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "Not authenticated" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);

        if (!user) return res.status(401).json({ message: "User not found" });

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};

// Ensure user is admin
exports.verifyAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Not authorized as admin' });
    }
    next();
};

// Ensure user is agent
exports.agentOnly = (req, res, next) => {
    if (req.user.role !== 'agent') {
        return res.status(403).json({ message: 'Not authorized as agent' });
    }
    next();
};
