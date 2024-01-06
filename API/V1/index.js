const express = require('express');

const router = express.Router();

const unProtectedRoutes = require('./ROUTES/unProtectedRoutes.js');
const userRoutes = require('./ROUTES/userRoutes.js');
const adminRoutes = require('./ROUTES/adminRoutes.js');
const { isAuth } = require('../../MIDDLEWARES/auth.js');


router.use('/common', unProtectedRoutes);
router.use('/user', isAuth, userRoutes);
router.use('/admin', isAuth, adminRoutes);
router.use('/ping', (req, res) => res.send('pong'));

module.exports = router;
