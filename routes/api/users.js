import express from 'express';
import {check, validationResult} from "express-validator";
import gravatar from 'gravatar'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from 'config';
import User from '../../models/Users'

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
   async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }

        const { name, email, password } = req.body;

       
       try {
           // Check if user exist
           let user = await User.findOne({email});
           if (user) {
               return res.status(400).json({errors: [{msg:'User already exist'}]})
           }

           // Gets users gravatar
           const avatar = gravatar.url(email, {
               s: '200',
               r: 'pg',
               d: 'mm'
           });

           user= new User({
               name,
               email,
               avatar,
               password
           });

           // encrypt password
           const salt = await bcrypt.genSalt(10);
           user.password = await  bcrypt.hash(password, salt);
           console.log('salt password:', user.password);

           await user.save();

           // return JWT token
           const payload = {
               user: {
                   id: user.id
               }
           };

           jwt.sign(
               payload,
               config.get('jwtToken'),
               { expiresIn: 360000 },
               (err, token)=>{
                   if(err) throw err;
                   res.json({token});
               }
           );
       }catch (err) {
           console.log(err.message);
           res.status(500).send('Server error on registration user')
       }



    });

module.exports = router;