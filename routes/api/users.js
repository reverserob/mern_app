import express from 'express';
import {check, validationResult} from "express-validator";

const router = express.Router();

// @route   POST api/user
// @desc    Register user
// @access  Public
// @params  required : name, email, password
router.post('/',
    [
        check('name', 'Name is required')
            .not()
            .isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Please enter a password of 6 or more characters').isLength({min: 6})
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }
        console.log(req.body);
        res.send('User route')
    });

module.exports = router;