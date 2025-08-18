const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { mongoUri, frontendUrl, jwtAccessSecret } = require('../config');
const { router: apiRoutes } = require('./routes');
const { errorHandler } = require('./middleware/error');
const cron = require('node-cron');
const { expirePendingOrders } = require('./jobs/expire');
const { Server } = require('socket.io');
let io;

function createApp() {
  const app = express();
  app.use(helmet());
  app.use(cors({ origin: frontendUrl, credentials: true }));
  app.use(express.json({ limit: '2mb' }));
  app.use(cookieParser());
  app.use(morgan('dev'));

  app.use('/api', rateLimit({ windowMs: 15 * 60 * 1000, max: 200 }));

  app.get('/health', (req, res) => res.json({ ok: true }));
  app.use('/api/v1', apiRoutes);

  app.use(errorHandler);
  return app;
}

async function connectDB() {
  mongoose.set('strictQuery', false);
  await mongoose.connect(mongoUri);
  console.log('Mongo connected');
}

function initSockets(server) {
  io = new Server(server, { cors: { origin: frontendUrl, credentials: true } });
  io.on('connection', (socket) => {
    socket.on('hello', () => socket.emit('hello', 'world'));
  });
  // attach to req if needed
  global._io = io;
}

function startCron() {
  cron.schedule('*/10 * * * *', expirePendingOrders);
}

module.exports = { createApp, connectDB, initSockets, startCron };
