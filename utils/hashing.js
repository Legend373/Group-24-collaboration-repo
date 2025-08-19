const { hash, compare } = require("bcryptjs");

// Hash a value (e.g., password)
exports.doHash = async (value, saltValue) => {
  const result = await hash(value, saltValue);
  return result;
};

// Validate a value against a hash
exports.doHashValidation = async (value, hashedValue) => {
  const result = await compare(value, hashedValue);
  return result;
};
