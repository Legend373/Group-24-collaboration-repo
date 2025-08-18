const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { jwtAccessSecret, jwtRefreshSecret } = require('../../config');

function signAccess(payload) {
  return jwt.sign(payload, jwtAccessSecret, { expiresIn: '15m' });
}
function signRefresh(payload) {
  return jwt.sign(payload, jwtRefreshSecret, { expiresIn: '30d' });
}
function verifyRefresh(token) {
  return jwt.verify(token, jwtRefreshSecret);
}
function hashToken(token) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

module.exports = { signAccess, signRefresh, verifyRefresh, hashToken };
