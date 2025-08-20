const { body, validationResult } = require('express-validator');

const validateInput = (method) => {
    switch (method) {
        case 'register':
            return [
                body('name')
                    .trim()
                    .notEmpty()
                    .withMessage('Name is required')
                    .escape(),
                body('email')
                    .trim()
                    .isEmail()
                    .withMessage('Valid email required')
                    .normalizeEmail(),
                body('password')
                    .isLength({ min: 6 })
                    .withMessage('Password must be at least 6 characters'),
                body('phone')
                    .trim()
                    .matches(/^\+251\d{9}$/)
                    .withMessage('Valid phone number required'),
                body('region')
                    .trim()
                    .notEmpty()
                    .withMessage('Location is required')
                    .escape(),
            ];
        case 'login':
            return [
                body('email')
                    .trim()
                    .isEmail()
                    .withMessage('Valid email required')
                    .normalizeEmail(),
                body('password')
                    .notEmpty()
                    .withMessage('Password is required'),
            ];
        default:
            return [];
    }
};

const checkValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array().map(err => ({
                field: err.param,
                message: err.msg
            }))
        });
    }
    next();
};

module.exports = { validateInput, checkValidation };
