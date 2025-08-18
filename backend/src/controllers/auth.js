const User = require('../models/User');
const { hashPassword, comparePassword } = require('../utils/passwords');
const { signAccess, signRefresh, verifyRefresh, hashToken } = require('../utils/jwt');

async function register(req, res) {
  const { role = 'buyer', email, phone, password, name } = req.body;
  if (!password || (!email && !phone)) return res.status(400).json({ error: 'Missing fields' });
  const passwordHash = await hashPassword(password);
  const user = await User.create({ role, email, phone, passwordHash, name: name || 'User' });
  const access = signAccess({ sub: user._id.toString(), role: user.role });
  const refresh = signRefresh({ sub: user._id.toString(), role: user.role });
  user.refreshTokens.push({ tokenHash: hashToken(refresh), device: req.headers['user-agent'] || 'device' });
  await user.save();
  res.cookie('refresh', refresh, { httpOnly: true, sameSite: 'lax', maxAge: 30*24*3600*1000 });
  res.json({ access, user: { id: user._id, role: user.role, name: user.name, email: user.email } });
}

async function login(req, res) {
  const { email, phone, password } = req.body;
  const user = await User.findOne(email ? { email } : { phone });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  const ok = await comparePassword(password, user.passwordHash);
  if (!ok) return res.status(401).json({ error: 'Invalid credentials' });
  const access = signAccess({ sub: user._id.toString(), role: user.role });
  const refresh = signRefresh({ sub: user._id.toString(), role: user.role });
  user.refreshTokens.push({ tokenHash: hashToken(refresh), device: req.headers['user-agent'] || 'device' });
  await user.save();
  res.cookie('refresh', refresh, { httpOnly: true, sameSite: 'lax', maxAge: 30*24*3600*1000 });
  res.json({ access, user: { id: user._id, role: user.role, name: user.name, email: user.email } });
}

async function refresh(req, res) {
  const token = req.cookies.refresh;
  if (!token) return res.status(401).json({ error: 'Missing refresh' });
  try {
    const payload = verifyRefresh(token);
    const user = await User.findById(payload.sub);
    if (!user) return res.status(401).json({ error: 'User not found' });
    const hashed = hashToken(token);
    const exists = user.refreshTokens.find(rt => rt.tokenHash === hashed);
    if (!exists) return res.status(401).json({ error: 'Token revoked' });
    const access = signAccess({ sub: user._id.toString(), role: user.role });
    res.json({ access });
  } catch (e) {
    return res.status(401).json({ error: 'Invalid refresh' });
  }
}

async function logout(req, res) {
  const token = req.cookies.refresh;
  if (token) {
    const userId = (() => { try { return verifyRefresh(token).sub; } catch { return null; } })();
    if (userId) {
      const user = await User.findById(userId);
      if (user) {
        const hashed = hashToken(token);
        user.refreshTokens = user.refreshTokens.filter(rt => rt.tokenHash !== hashed);
        await user.save();
      }
    }
  }
  res.clearCookie('refresh');
  res.json({ ok: true });
}

module.exports = { register, login, refresh, logout };
