const nodemailer = require("nodemailer");

// Create transporter using Gmail SMTP with SSL
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,       // SSL port
    secure: true,    // true for SSL
    auth: {
        user: process.env.EMAIL_USER,  // Your Gmail address
        pass: process.env.EMAIL_PASS,  // Your 16-character App Password
    },
});

// Function to send email
const sendMail = async (to, subject, html) => {
    try {
        const info = await transporter.sendMail({
            from: `"Yegna Farmer System" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html,
        });
        console.log("Email sent:", info.messageId);
    } catch (error) {
        console.error("Failed to send email:", error);
        throw error; // rethrow so calling function knows it failed
    }
};

module.exports = sendMail;
