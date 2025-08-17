const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: [true, "Email must be unique!"],
        //minlength: [15, "Email must have at least 15 characters!"],
        lowercase: true,
    }, 
    password: {
        type: String,
        required: [true, "Password must be provided!"],
        trim: true,
        select: false
    },
    verified: {
        type: Boolean,
        default: false,
    },
    verificationcode: {
        type: String,
        select: false,
    },
    verificationcodevalidation: {
        type: String,
        select: false,
    },
    forgotpasswordcode: {
        type: String,
        select: false,
    },
    forgotpasswordcodevalidation: {
        type: Number,
        select: false,
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
