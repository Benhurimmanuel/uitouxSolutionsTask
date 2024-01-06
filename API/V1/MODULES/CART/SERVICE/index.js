const { Cart } = require("../../../../../DB/SCHEMA/cart");
const { Product } = require("../../../../../DB/SCHEMA/product");
const { getSingleData, addData, getAllDataByCondition, getSingleDataById, updateSingleData, updateManyData, } = require("../../../../../DB/wrapper");
const { SUCCESS_MESSAGE, PRODUCT_UNAVAILABLE, PRODUCT_OUT_OF_STOCK } = require("../../../CONSTANTS/httpConstants");
const { generateLog } = require("../../../UTILS/loggerUtils");
/*
 * @param {productId, route, user, method, accountType} string,string,string,string,string
 * @return{status,payload} statuscode,object||string
 * @desc  add/increase product to/in cart
 */
const addToCartService = async (productId, route, user, method, accountType) => {
    const productData = await getSingleDataById(Product, productId)
    // check if product is available
    if (productData.quantityAvailable = 0) {
        generateLog(route, user, method, accountType, PRODUCT_UNAVAILABLE)
        return { statusCode: 403, payload: PRODUCT_UNAVAILABLE };
    }
    // check if product is existing in users cart
    const isProductAvailbleInUsersCart = await getSingleData(Cart, {
        "productDetails._id": productId,
        orderStatus: 'pendingPurchase',
        userId: user
    })
    if (isProductAvailbleInUsersCart.status) {
        // increasing the quantity by 1
        const result = await updateSingleData(Cart,
            { '_id': isProductAvailbleInUsersCart.data._id },
            { $inc: { 'productDetails.quantity': 1, }, orderStatus: "pendingPurchase" },
            { new: true },
        )
    }
    else {
        // add product to cart
        const result = await addData(Cart, {
            productDetails: {
                _id: productId,
                productName: productData.data.productName,
                productImage: productData.data.productImage,
                productPrice: productData.data.productPrice,
                quantity: 1
            },
            userId: user
        })
    }
    generateLog(route, user, method, accountType, SUCCESS_MESSAGE)
    return { statusCode: 200, payload: SUCCESS_MESSAGE };
}



/*
 * @param {productId, route, user, method, accountType} string,string,string,string,string
 * @return{status,payload} statuscode,object||string
 * @desc  buy cart items
 */
const buyCartItemsService = async (route, user, method, accountType) => {
    // get all cartitems with pending purchase
    const AllCartData = await getAllDataByCondition(Cart, { userId: user, orderStatus: 'pendingPurchase' })
    // recheck all data for stocks
    const productArray = []
    for (let cartData of AllCartData.data) {
        const productData = await getSingleDataById(Product, cartData.productDetails._id)
        if (productData.data.quantityAvailable < cartData.productDetails.quantity) {
            productArray.push(productData.data.productName)
        }
    }
    // generate errorr message if any product out of stock
    if (productArray.length > 0) {
        generateLog(route, user, method, accountType, JSON.stringify({ payload: { productList: productArray }, message: PRODUCT_OUT_OF_STOCK }))
        return {
            statusCode: 403, payload: { productList: productArray, message: PRODUCT_OUT_OF_STOCK },
        };
    } else {
        //complete purchase
        const result = await updateManyData(Cart,
            { userId: user, orderStatus: 'pendingPurchase' },
            { orderStatus: "purchaseCompleted" },
        )
        generateLog(route, user, method, accountType, SUCCESS_MESSAGE)
        return { statusCode: 200, payload: SUCCESS_MESSAGE, }
    }
}

module.exports = { addToCartService, buyCartItemsService }