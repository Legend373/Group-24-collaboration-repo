require("dotenv").config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require("cors");
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const productRoute = require('./routes/productRoute');
//const dashboardRoutes = require('./routes/dashboardRoutes');
const farmerRoutes = require('./routes/farmerRoute');
const orderRoute = require('./routes/orderRoute');
const cartRoute = require('./routes/cartRoute');
//const mongoSanitize = require('express-mongo-sanitize');


const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/agents", require("./routes/agentRoute"));
app.use('/api/farmers', farmerRoutes);
app.use('/api/auth', authRoutes);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/cart", cartRoute);

//app.use('/api', dashboardRoutes);
connectDB();

const PORT = process.env.PORT || 5000;




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
