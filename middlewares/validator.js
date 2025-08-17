const Joi = require('joi');

exports.signupSchema = Joi.object({
email: Joi.string()
.min(6)
.max(60)
.required()
.email({
    tlds:{ allow: ['com','net'] },

}),
password:Joi.string()
    .required()
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$'))
    .messages({
  'string.pattern.base': 
    'Password must contain at least one uppercase letter, one lowercase letter, and one digit.',
}),
});
const Joi = require("joi");

const signinSchema = Joi.object({
  email: Joi.string()
    .min(6)
    .max(60)
    .required()
    .email({ tlds: { allow: ['com', 'net'] } }),

  password: Joi.string()
    .required()
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$"))
    .messages({
      "string.pattern.base":
        "Password must contain at least one uppercase letter, one lowercase letter, and one digit.",
    }),
});

module.exports = { signinSchema };


