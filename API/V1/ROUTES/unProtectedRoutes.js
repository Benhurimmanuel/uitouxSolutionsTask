const express = require('express');
const { userSignInController, userSignUpController, adminSignUpController, adminSignInController } = require('../MODULES/AUTH/CONTROLLERS');
const { getAdsListController } = require('../MODULES/ADS/CONTROLLERS');
const { getProductListofSingleCategoryController, getProductRecommendationsByTagsController } = require('../MODULES/PRODUCTS/CONTROLLERS');
const { getCategoryListController } = require('../MODULES/CATEGORIES/CONTROLLERS');

const router = express.Router();
router.use('/ping', (req, res) => res.send('pong'));


router.route('/user/signup').post(userSignUpController);
router.route('/user/signin').post(userSignInController);
router.route('/admin/signup').post(adminSignUpController);
router.route('/admin/signin').post(adminSignInController);

//ads
router.route('/ads/getall').get(getAdsListController);
//categories
router.route('/categories/getall').get(getCategoryListController);
//products

router.route('/categories/:categoryid/productlist').get(getProductListofSingleCategoryController);

// Recommendations
router.route('/recommendations/products').get(getProductRecommendationsByTagsController);




module.exports = router;
