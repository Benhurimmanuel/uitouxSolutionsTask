const { createAdsService, getAdsListService } = require("../SERVICE");

const createAdsController = async (req, res, next) => {
    try {
        const { user, accountType, method } = req;
        const route = req.originalUrl;
        const adsPayload = req.body
        const { statusCode, payload } = await createAdsService(adsPayload, route, user, method, accountType);
        res.status(statusCode).send({ payload });
    } catch (error) {
        next(error);
    }
}

const getAdsListController = async (req, res, next) => {
    try {
        const { user, accountType, method } = req;
        const route = req.originalUrl;
        const { pageSize, pageNumber } = req.query
        const { statusCode, payload } = await getAdsListService(pageSize, pageNumber, route, user, method, accountType);
        res.status(statusCode).send({ payload });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createAdsController,
    getAdsListController
}