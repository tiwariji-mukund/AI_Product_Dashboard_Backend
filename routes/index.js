const express = require('express');
const router = express.Router();
const passport = require('passport');
const homeController = require('../controllers/homeControllers');

router.get('/', passport.isAuthenticate, homeController.home);
router.get('/signup', passport.isAuthenticate, homeController.signUp);
router.post('/create-user', homeController.create_user);
router.post('/create-session', passport.authenticate('local', {failureRedirect: '/'}), homeController.create_session);
router.get('/delete-session', homeController.destroy_session);

router.use('/admin', require('./admin'));
// router.use('/api', require('./api'));


module.exports = router;