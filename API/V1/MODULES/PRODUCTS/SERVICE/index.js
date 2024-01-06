const { Category } = require("../../../../../DB/SCHEMA/category");
const { Product } = require("../../../../../DB/SCHEMA/product");
const { getSingleData, addData, getAllDataByCondition, getSingleDataById, } = require("../../../../../DB/wrapper");
const { createProductSchema } = require("../../../../../HELPERS/VALIDATIONS");
const { UNSUCCESSFUL_MESSAGE, SUCCESS_MESSAGE, CATEGORY_NON_EXISTANT, DUPLICATE_PRODUCT, PRODUCT_NON_EXISTANT } = require("../../../CONSTANTS/httpConstants");
const { generateLog } = require("../../../UTILS/loggerUtils");

/*
 * @param {categoryId, productPayload,route, user, method, accountType} string,Object,string,string,string,string
 * @return{status,payload} statuscode,object||string
 * @desc  create category
 */
const createProductService = async (categoryId, productPayload, route, user, method, accountType) => {
    // validate payload
    await createProductSchema.validateAsync({ ...productPayload });
    // check if category exists
    const isCategoryPresent = await getSingleDataById(Category, categoryId)
    if (!isCategoryPresent.status) {
        generateLog(route, user, method, accountType, CATEGORY_NON_EXISTANT)
        return { statusCode: 403, payload: CATEGORY_NON_EXISTANT };
    }
    // check if product exists
    const isProductPresent = await getSingleData(Product, { productName: productPayload.productName })
    if (isProductPresent.status) {
        generateLog(route, user, method, accountType, DUPLICATE_PRODUCT)
        return { statusCode: 403, payload: DUPLICATE_PRODUCT };
    }

    productPayload.categoryDetails = {
        _id: categoryId,
        categoryName: isCategoryPresent.data.categoryName
    }
    // add category to db
    const result = await addData(Product, { ...productPayload })
    if (!result.status) {
        generateLog(route, user, method, accountType, UNSUCCESSFUL_MESSAGE)
        return { statusCode: 403, payload: UNSUCCESSFUL_MESSAGE };
    }
    generateLog(route, user, method, accountType, SUCCESS_MESSAGE)
    return { statusCode: 201, payload: SUCCESS_MESSAGE };

}

/*
 * @param {categoryId, route, user, method, accountType} string,string,string,string,string
 * @return{status,payload} statuscode,object||string
 * @desc  get list of all prodcuts belonging to single category
 */const getProductListofSingleCategoryService = async (categoryId, route, user, method, accountType) => {
    const isCategoryPresent = await getSingleDataById(Category, categoryId)
    if (!isCategoryPresent.status) {
        generateLog(route, user, method, accountType, CATEGORY_NON_EXISTANT)
        return { statusCode: 403, payload: CATEGORY_NON_EXISTANT };
    }
    const result = await getAllDataByCondition(Product, { "categoryDetails._id": categoryId })
    if (!result.status) {
        generateLog(route, user, method, accountType, UNSUCCESSFUL_MESSAGE)
        return { statusCode: 400, payload: UNSUCCESSFUL_MESSAGE };
    }
    generateLog(route, user, method, accountType, JSON.stringify(result.data))
    return { statusCode: 201, payload: result.data };
}




/*
 * @param {productId, route, user, method, accountType} string,string,string,string,string
 * @return{status,payload} statuscode,object||string
 * @desc  get single product details
 */
const getSingleProductService = async (productId, route, user, method, accountType) => {
    const productDetails = await getSingleDataById(Product, productId)
    if (!productDetails.status) {
        generateLog(route, user, method, accountType, PRODUCT_NON_EXISTANT)
        return { statusCode: 403, payload: PRODUCT_NON_EXISTANT };
    }

    generateLog(route, user, method, accountType, JSON.stringify(productDetails.data))
    return { statusCode: 201, payload: productDetails.data };
}


module.exports = {
    createProductService, getProductListofSingleCategoryService, getSingleProductService
}