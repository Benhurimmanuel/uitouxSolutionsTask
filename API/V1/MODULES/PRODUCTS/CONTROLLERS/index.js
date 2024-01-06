const { createProductService, getProductListofSingleCategoryService, getSingleProductService, getProductRecommendationsByTagsService,
} = require("../SERVICE");

const createProductController = async (req, res, next) => {
    try {
        const { user, accountType, method } = req;
        const route = req.originalUrl;
        const productPayload = req.body
        const categoryId = req.params.categoryid
        const { statusCode, payload } = await createProductService(categoryId, productPayload, route, user, method, accountType);
        res.status(statusCode).send({ payload });
    } catch (error) {
        next(error);
    }
}

const getProductListofSingleCategoryController = async (req, res, next) => {
    try {
        const { user, accountType, method } = req;
        const route = req.originalUrl;
        const categoryId = req.params.categoryid
        const { pageSize, pageNumber } = req.query
        const { statusCode, payload } = await getProductListofSingleCategoryService(categoryId, pageSize, pageNumber, route, user, method, accountType);
        res.status(statusCode).send({ payload });
    } catch (error) {
        next(error);
    }
}

const getSingleProductController = async (req, res, next) => {
    try {
        const { user, accountType, method } = req;
        const route = req.originalUrl;
        const productId = req.params.productid

        const { statusCode, payload } = await getSingleProductService(productId, route, user, method, accountType);
        res.status(statusCode).send({ payload });
    } catch (error) {
        next(error);
    }
}

const getProductRecommendationsByTagsController = async (req, res, next) => {
    try {
        const { user, accountType, method } = req;
        const route = req.originalUrl;
        const { tag, pageSize, pageNumber } = req.query

        const { statusCode, payload } = await getProductRecommendationsByTagsService(tag, pageSize, pageNumber, route, user, method, accountType);
        res.status(statusCode).send({ payload });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createProductController,
    getProductListofSingleCategoryController,
    getSingleProductController,
    getProductRecommendationsByTagsController
}