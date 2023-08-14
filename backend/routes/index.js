const express = require('express');
const router = express.Router();
const fs = require('fs');
const passport = require('passport');
const homeController = require('../controllers/homeControllers');

// routes for home page, signup, create-session, create-user and logout
router.get('/', passport.isAuthenticate, homeController.home);
router.get('/signup', passport.isAuthenticate, homeController.signUp);
router.post('/create-user', homeController.create_user);
router.post('/create-session', passport.authenticate('local', {failureRedirect: '/'}), homeController.create_session);
router.get('/delete-session', homeController.destroy_session);

// all the routes related to admin will be transferred here
router.use('/admin', require('./admin'));
// all the routes related to api will be transferred here
router.use('/api', require('./api'));


module.exports = router;