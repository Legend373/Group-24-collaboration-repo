const crypto = require('crypto');
const { cloudinary } = require('../../config');

function sign(req, res) {
  const folder = req.query.folder || 'yegnafarm';
  const timestamp = Math.floor(Date.now()/1000);
  const raw = `folder=${folder}&timestamp=${timestamp}${cloudinary.apiSecret}`;
  const signature = crypto.createHash('sha1').update(raw).digest('hex');
  res.json({ cloudName: cloudinary.cloudName, apiKey: cloudinary.apiKey, folder, timestamp, signature });
}
module.exports = { sign };
