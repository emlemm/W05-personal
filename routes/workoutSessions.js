const express = require('express');
const router = express.Router();

const workoutController = require('../controllers/workout_sessions');

router.get('/', workoutController.getAllData);
router.get('/:id', workoutController.getOneFromData);
router.post('/', workoutController.create);
router.put('/:id', workoutController.updateOne);
router.delete('/:id', workoutController.deleteOne);

module.exports = router;