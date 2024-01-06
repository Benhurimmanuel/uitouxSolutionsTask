const express = require('express');
const { createCategoryController, getCategoryListController } = require('../MODULES/CATEGORIES/CONTROLLERS');
const { createProductController, getProductListofSingleCategoryController, getSingleProductController, getProductRecommendationsByTagsController } = require('../MODULES/PRODUCTS/CONTROLLERS');
const { createAdsController, getAdsListController } = require('../MODULES/ADS/CONTROLLERS');

const router = express.Router();

//ads
router.route('/ads/create').post(createAdsController);
router.route('/ads/getall').get(getAdsListController);




// categories
router.route('/categories/create').post(createCategoryController);
router.route('/categories/getall').get(getCategoryListController);

// products
router.route('/categories/:categoryid/product/create').post(createProductController);
router.route('/categories/:categoryid/productlist').get(getProductListofSingleCategoryController);
router.route('/products/:productid/details').get(getSingleProductController);
module.exports = router;
