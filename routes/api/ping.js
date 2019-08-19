import express from'express';
const router = express.Router();

// @route   GET api/ping
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('PING route'));

export default router;