const bcrypt = require('bcryptjs');
async function hashPassword(pw) { return await bcrypt.hash(pw, 10); }
async function comparePassword(pw, hash) { return await bcrypt.compare(pw, hash); }
module.exports = { hashPassword, comparePassword };
