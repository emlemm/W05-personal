const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.get('/', usersController.getAllData);
router.get('/:id', usersController.getOneFromData);
router.post('/', usersController.create);
router.put('/:id', usersController.updateOne);
router.delete('/:id', usersController.deleteOne);

module.exports = router;