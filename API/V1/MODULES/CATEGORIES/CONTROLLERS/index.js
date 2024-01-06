const { createCategoryService, getCategoryListService } = require("../SERVICE");

const createCategoryController = async (req, res, next) => {
    try {
        const { user, accountType, method } = req;
        const route = req.originalUrl;
        const categoryPayload = req.body
        const { statusCode, payload } = await createCategoryService(categoryPayload, route, user, method, accountType);
        res.status(statusCode).send({ payload });
    } catch (error) {
        next(error);
    }
}

const getCategoryListController = async (req, res, next) => {
    try {
        const { user, accountType, method } = req;
        const route = req.originalUrl;
        const categoryPayload = req.body
        const { statusCode, payload } = await getCategoryListService(categoryPayload, route, user, method, accountType);
        res.status(statusCode).send({ payload });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createCategoryController,
    getCategoryListController
}