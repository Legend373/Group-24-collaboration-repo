// Load environment variables first
require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const authRouter = require('./routers/authrouter');

const app = express();

// -------------------- Middleware --------------------
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//------------------- Database Connection --------------------
console.log('MONGO_URI from env:', process.env.MONGO_URI);

mongoose.set('strictQuery', true);

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI), {serverSelectionTimeoutMS: 8000000};
    console.log('Database connected');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
};

// -------------------- Routes --------------------
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the server' });
});

// -------------------- Start Server --------------------
connectDb().then(() => {
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
