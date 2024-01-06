const { addToCartService, buyCartItemsService } = require("../SERVICE");

const addToCartController = async (req, res, next) => {
    try {
        const { user, accountType, method } = req;
        const route = req.originalUrl;
        const productId = req.params.productid
        const { statusCode, payload } = await addToCartService(productId, route, user, method, accountType);
        res.status(statusCode).send({ payload });
    } catch (error) {
        next(error);
    }
}

const buyCartItemsController = async (req, res, next) => {
    try {
        const { user, accountType, method } = req;
        const route = req.originalUrl;
        const { statusCode, payload } = await buyCartItemsService(route, user, method, accountType);
        res.status(statusCode).send({ payload });
    } catch (error) {
        next(error);
    }
}


module.exports = { addToCartController, buyCartItemsController }