const express = require('express');
const router = express.Router();
const fs = require('fs');
const passport = require('passport')
const apiController = require('../controllers/apiController');

router.get('/metrics', passport.checkAuthentication, apiController.metrics);
router.get('/predictions', passport.checkAuthentication, apiController.predictions);

module.exports = router;