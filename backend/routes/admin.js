const express = require('express');
const router = express.Router();
const passport = require('passport')
const adminController = require('../controllers/adminController');

router.get('/dashboard', passport.checkAuthentication, adminController.dashboard);

module.exports = router;