// seedAdmin.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const User = require("./models/User");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log("✅ Connected to MongoDB");

  // Check if admin already exists
  const existingAdmin = await User.findOne({ email: "admin@yegnafarm.com" });
  if (existingAdmin) {
    console.log("⚠️ Admin already exists");
    process.exit();
  }

  // Create admin
  const hashedPassword = await bcrypt.hash("admin123", 10);
  const admin = new User({
    name: "Super Admin",
    email: "admin@yegnafarm.com",
    password: hashedPassword,
    role: "admin",
  });

  await admin.save();
  console.log("✅ Admin user created!");
  process.exit();
})
.catch(err => console.error(err));
