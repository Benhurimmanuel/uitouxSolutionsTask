const express = require('express');
const { userSignInController, userSignUpController, adminSignUpController, adminSignInController } = require('../MODULES/REGISTRATIONS/CONTROLLERS');

const router = express.Router();
router.use('/ping', (req, res) => res.send('pong'));


router.route('/user/signup').post(userSignUpController);
router.route('/user/signin').post(userSignInController);
router.route('/admin/signup').post(adminSignUpController);
router.route('/admin/signin').post(adminSignInController);



module.exports = router;
