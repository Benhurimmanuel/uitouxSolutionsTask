const { reviewProductService } = require("../SERVICE");

const reviewProductController = async (req, res, next) => {
    try {
        const { user, accountType, method } = req;
        const route = req.originalUrl;
        const productId = req.params.productid
        const reviewPayload = req.body
        const { statusCode, payload } = await reviewProductService(productId, reviewPayload, route, user, method, accountType);
        res.status(statusCode).send({ payload });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    reviewProductController
}