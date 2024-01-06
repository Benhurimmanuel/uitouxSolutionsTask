const { model } = require("mongoose");
const { Cart } = require("../../../../../DB/SCHEMA/cart");
const { Product } = require("../../../../../DB/SCHEMA/product");
const { getSingleData, updateSingleData } = require("../../../../../DB/wrapper");
const { FORBIDDEN_MESSAGE, UNSUCCESSFUL_MESSAGE, SUCCESS_MESSAGE } = require("../../../CONSTANTS/httpConstants");
const { generateLog } = require("../../../UTILS/loggerUtils");

const reviewProductService = async (productId, reviewPayload, route, user, method, accountType) => {
    // check if product purchased by user
    const isProductPurchased = await getSingleData(Cart, {
        "productDetails._id": productId,
        userId: user,
        orderStatus: "purchaseCompleted",
    });

    if (!isProductPurchased.status) {
        // throwing error when no purchase
        generateLog(route, user, method, accountType, FORBIDDEN_MESSAGE);
        return { statusCode: 403, payload: FORBIDDEN_MESSAGE };
    }
    //increasing rating value
    const result = await updateSingleData(
        Product,
        { '_id': productId },
        { $inc: { [`ratings.${reviewPayload.starRating}`]: 1, }, },
        { new: true }
    );

    if (!result.status) {
        generateLog(route, user, method, accountType, UNSUCCESSFUL_MESSAGE)
        return { statusCode: 400, payload: UNSUCCESSFUL_MESSAGE };
    }
    generateLog(route, user, method, accountType, SUCCESS_MESSAGE)
    return { statusCode: 200, payload: SUCCESS_MESSAGE };
}


module.exports = { reviewProductService }