const express = require('express');
const router = express.Router();

router.use('/swagger', require('./swagger'));
router.use('/users', require('./users'));
router.use('/workoutSessions', require('./workoutSessions'));

module.exports = router;