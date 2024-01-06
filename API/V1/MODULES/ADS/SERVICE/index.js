const { Ads } = require("../../../../../DB/SCHEMA/ads");
const { getSingleData, addData, getAllDataByCondition } = require("../../../../../DB/wrapper");
const { createAdsSchema } = require("../../../../../HELPERS/VALIDATIONS");
const { DUPLICATE_ads, UNSUCCESSFUL_MESSAGE, SUCCESS_MESSAGE } = require("../../../CONSTANTS/httpConstants");
const { generateLog } = require("../../../UTILS/loggerUtils");

/*
 * @param {adsPayload, route, user, method, accountType} object,string,string,string,string
 * @return{status,payload} statuscode,object||string
 * @desc  create ads
 */
const createAdsService = async (adsPayload, route, user, method, accountType) => {
    // validate payload
    await createAdsSchema.validateAsync({ ...adsPayload });

    // check if ads exists
    isAdPresent = await getSingleData(Ads, { adTitile: adsPayload.adTitile })
    if (isAdPresent.status) {
        generateLog(route, user, method, accountType, DUPLICATE_ads)
        return { statusCode: 403, payload: DUPLICATE_ads };
    }

    // add ads to db
    const result = await addData(Ads, { ...adsPayload })
    if (!result.status) {
        generateLog(route, user, method, accountType, UNSUCCESSFUL_MESSAGE)
        return { statusCode: 403, payload: UNSUCCESSFUL_MESSAGE };
    }
    generateLog(route, user, method, accountType, SUCCESS_MESSAGE)
    return { statusCode: 201, payload: SUCCESS_MESSAGE };

}

/*
 * @param { route, user, method, accountType} object,string,string,string,string
 * @return{status,payload} statuscode,object||string
 * @desc  get list of all categories
 */
const getAdsListService = async (pageSize, pageNumber, route, user, method, accountType) => {
    const result = await getAllDataByCondition(Ads, {}, pageSize, pageNumber)
    if (!result.status) {
        generateLog(route, user, method, accountType, UNSUCCESSFUL_MESSAGE)
        return { statusCode: 403, payload: UNSUCCESSFUL_MESSAGE };
    }
    generateLog(route, user, method, accountType, JSON.stringify(result.data))
    return { statusCode: 201, payload: result.data };
}





module.exports = { createAdsService, getAdsListService }