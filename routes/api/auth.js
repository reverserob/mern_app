import express from 'express';
import auth from '../../middleware/auth';
import User from '../../models/users'
const router = express.Router();

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/',
    auth,
    async (req, res) => {
        try {
            const user = await User.findById(req.user.id)
            res.json(user);
        }catch (err) {
            console.log(err.message);
            res.status(500).send('Server Error');
        }
    });

module.exports = router;