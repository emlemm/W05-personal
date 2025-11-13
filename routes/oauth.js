const express = require('express');
const router = express.Router();

const oauthController = require('../controllers/oauth');

router.post('/token', oauthController.getToken);

module.exports = router;