const express = require('express');
const { getCategoryListController } = require('../MODULES/CATEGORIES/CONTROLLERS');
const { getProductListofSingleCategoryController, getSingleProductController, } = require('../MODULES/PRODUCTS/CONTROLLERS');
const { reviewProductController } = require('../MODULES/REVIEWS/CONTROLLERS');
const { addToCartController, buyCartItemsController, getAllCartItemsController } = require('../MODULES/CART/CONTROLLERS');

const router = express.Router();

// categories
router.route('/categories/getall').get(getCategoryListController);


// products
router.route('/categories/:categoryid/productlist').get(getProductListofSingleCategoryController);
router.route('/products/:productid/details').get(getSingleProductController);
router.route('/products/:productid/addtocart').post(addToCartController);
router.route('/cart/getall').get(getAllCartItemsController);
router.route('/cart/buy').patch(buyCartItemsController);
router.route('/review/products/:productid').patch(reviewProductController);


module.exports = router;
