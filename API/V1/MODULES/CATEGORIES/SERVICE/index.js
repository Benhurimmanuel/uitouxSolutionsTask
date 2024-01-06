const { Category } = require("../../../../../DB/SCHEMA/category");
const { getSingleData, addData, getAllDataByCondition } = require("../../../../../DB/wrapper");
const { createCategorySchema } = require("../../../../../HELPERS/VALIDATIONS");
const { DUPLICATE_CATEGORY, UNSUCCESSFUL_MESSAGE, SUCCESS_MESSAGE } = require("../../../CONSTANTS/httpConstants");
const { generateLog } = require("../../../UTILS/loggerUtils");

/*
 * @param {categoryPayload, route, user, method, accountType} object,string,string,string,string
 * @return{status,payload} statuscode,object||string
 * @desc  create category
 */
const createCategoryService = async (categoryPayload, route, user, method, accountType) => {
    // validate payload
    await createCategorySchema.validateAsync({ ...categoryPayload });

    // check if category exists
    isCategoryPresent = await getSingleData(Category, { categoryName: categoryPayload.categoryName })
    if (isCategoryPresent.status) {
        generateLog(route, user, method, accountType, DUPLICATE_CATEGORY)
        return { statusCode: 403, payload: DUPLICATE_CATEGORY };
    }

    // add category to db
    const result = await addData(Category, { ...categoryPayload })
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
const getCategoryListService = async (pageSize, pageNumber, route, user, method, accountType) => {
    const result = await getAllDataByCondition(Category, {}, pageSize, pageNumber)
    if (!result.status) {
        generateLog(route, user, method, accountType, UNSUCCESSFUL_MESSAGE)
        return { statusCode: 403, payload: UNSUCCESSFUL_MESSAGE };
    }
    generateLog(route, user, method, accountType, JSON.stringify(result.data))
    return { statusCode: 201, payload: result.data };
}



module.exports = { createCategoryService, getCategoryListService }