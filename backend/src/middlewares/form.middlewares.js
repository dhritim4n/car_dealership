import { body, validationResult } from "express-validator";

const isValid = [
        body('name')
            .notEmpty().withMessage('Name is required')
            .isLength({ min: 2 })
            .withMessage('Name must be at least 2 characters long'),

        body('email')
            .notEmpty().withMessage('Email is required')
            .isEmail().withMessage('Invalid email format'),

        body('subject').notEmpty().withMessage('Subject is required')
            .isLength({ min: 3 }).withMessage('Subject must be at least 3 characters long'),

        body('message').notEmpty().withMessage('Message is required')
            .isLength({ min: 10 }).withMessage('Message must be at least 10 characters long')
    ];


const validate = [
    ...isValid,
    (req, res, next) => {
   const errors = validationResult(req)

   if(!errors.isEmpty()){
    return res.status(400).json({
        success: false,
        errors: errors.array().map(err => err.msg)
    })
   }
   next()

    }
]

export{
    validate
}