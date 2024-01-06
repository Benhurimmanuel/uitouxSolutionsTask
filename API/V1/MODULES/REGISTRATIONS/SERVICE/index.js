const bcrypt = require("bcrypt");
const { generateAccessToken } = require("../../../UTILS/authUtils");
const { EMAIL_ALREADY_EXISITING, UNSUCCESSFUL_MESSAGE, EMAIL_NOT_FOUND } = require("../../../CONSTANTS/httpConstants");
const { addData, getSingleData } = require("../../../../../DB/wrapper");
const { User } = require("../../../../../DB/SCHEMA/user");
const { USER_ACCOUNT, ADMIN_ACCOUNT } = require("../../../CONSTANTS/variables");
const { generateLog } = require("../../../UTILS/loggerUtils");
const { Admin } = require("../../../../../DB/SCHEMA/admin");
const { signUpSchema, signInSchema } = require("../../../../../HELPERS/VALIDATIONS");



/*
 * @param {fullName, email, password, user, method, accountType, route} string,string,string,string,string,string
 * @return{status,payload} statuscode,object||string
 * @desc  signup new user and generate login token
 */
const userSignUpService = async (fullName, email, password, route, user, method, accountType,) => {
    await signUpSchema.validateAsync({ fullName, email, password });

    // check if user exit
    const isUserAvailable = await getSingleData(User, { email: email.toLowerCase() })

    if (isUserAvailable.status) {
        generateLog(route, user, method, accountType, EMAIL_ALREADY_EXISITING)
        return { statusCode: 403, payload: EMAIL_ALREADY_EXISITING };
    }
    //  Hash the password
    let hashedPassword = await bcrypt.hash(password, 10);
    // set user in db
    const payload = await addData(User, { fullName, email: email.toLowerCase(), password: hashedPassword })
    if (!payload.status) {
        generateLog(route, user, method, accountType, UNSUCCESSFUL_MESSAGE)
        return { statusCode: 400, payload: UNSUCCESSFUL_MESSAGE };
    }
    //generating accessToken
    const accessToken = generateAccessToken(payload.data.id, payload.data.email, accountType,);

    if (!accessToken) {
        generateLog(route, user, method, accountType, RETRY_LOGIN)
        return { statusCode: 400, payload: RETRY_LOGIN }
    }
    generateLog(route, user, method, accountType, JSON.stringify({ token: accessToken }))
    return { statusCode: 201, payload: { token: accessToken } };

}

/*
 * @param { email, password, user, method, accountType, route} string,string,string,string,string
 * @return{status,payload} statuscode,object||string
 * @desc  signin existing user and generate login token
 */
const userSignInService = async (email, password, route, user, method, accountType,) => {
    await signInSchema.validateAsync({ email, password });

    const isUserAvailable = await getSingleData(User, { email: email.toLowerCase() })
    //checking if user available
    if (!isUserAvailable.status) {
        generateLog(route, user, method, accountType, EMAIL_NOT_FOUND)
        return { statusCode: 403, payload: EMAIL_NOT_FOUND };
    }
    const isPasswordVerifiedTrue = bcrypt.compare(password, isUserAvailable.data.password)
    //checking if passwards match
    if (!isPasswordVerifiedTrue) {
        generateLog(route, user, method, accountType, UNAUTHORIZED_ACCESS_MESSAG)
        return { statusCode: 401, payload: UNAUTHORIZED_ACCESS_MESSAGE };
    }
    //generating accessToken
    const accessToken = generateAccessToken(isUserAvailable.data.id, isUserAvailable.data.email, accountType = USER_ACCOUNT,);

    if (!accessToken) {
        generateLog(route, user, method, accountType, RETRY_LOGIN)
        return { statusCode: 400, payload: RETRY_LOGIN }
    }
    generateLog(route, user, method, accountType, JSON.stringify({ token: accessToken }))
    return { statusCode: 200, payload: { token: accessToken } };

}

/*
 * @param {fullName, email, password, user, method, accountType, route} string,string,string,string,string,string
 * @return{status,payload} statuscode,object||string
 * @desc  signup new admin and generate login token
 */
const adminSignUpService = async (fullName, email, password, route, user, method, accountType,) => {
    // check if user exit
    await signUpSchema.validateAsync(fullName, email, password);

    const isUserAvailable = await getSingleData(Admin, { email: email.toLowerCase(), })
    if (isUserAvailable.status) {
        generateLog(route, user, method, accountType, EMAIL_ALREADY_EXISITING)
        return { statusCode: 403, payload: EMAIL_ALREADY_EXISITING };
    }
    //  Hash the password
    let hashedPassword = await bcrypt.hash(password, 10);
    // set user in db
    const payload = await addData(Admin, { fullName, email: email.toLowerCase(), password: hashedPassword, })
    if (!payload.status) {
        generateLog(route, user, method, accountType, UNSUCCESSFUL_MESSAGE)
        return { statusCode: 400, payload: UNSUCCESSFUL_MESSAGE };
    }
    //generating accessToken
    const accessToken = generateAccessToken(payload.data.id, payload.data.email, accountType,);

    if (!accessToken) {
        generateLog(route, user, method, accountType, RETRY_LOGIN)
        return { statusCode: 400, payload: RETRY_LOGIN }
    }
    generateLog(route, user, method, accountType, JSON.stringify({ token: accessToken }))
    return { statusCode: 201, payload: { token: accessToken } };

}

/*
 * @param { email, password, user, method, accountType, route} string,string,string,string,string
 * @return{status,payload} statuscode,object||string
 * @desc  signin existing admin and generate login token
 */
const adminSignInService = async (email, password, route, user, method, accountType,) => {
    await signInSchema.validateAsync({ email, password });

    const isUserAvailable = await getSingleData(Admin, { email: email.toLowerCase(), })
    //checking if user available
    if (!isUserAvailable.status) {
        generateLog(route, user, method, accountType, EMAIL_NOT_FOUND)
        return { statusCode: 403, payload: EMAIL_NOT_FOUND };
    }
    const isPasswordVerifiedTrue = bcrypt.compare(password, isUserAvailable.data.password)
    //checking if passwards match
    if (!isPasswordVerifiedTrue) {
        generateLog(route, user, method, accountType, UNAUTHORIZED_ACCESS_MESSAG)
        return { statusCode: 401, payload: UNAUTHORIZED_ACCESS_MESSAGE };
    }
    //generating accessToken
    const accessToken = generateAccessToken(isUserAvailable.data.id, isUserAvailable.data.email, accountType = ADMIN_ACCOUNT,);

    if (!accessToken) {
        generateLog(route, user, method, accountType, RETRY_LOGIN)
        return { statusCode: 400, payload: RETRY_LOGIN }
    }
    generateLog(route, user, method, accountType, JSON.stringify({ token: accessToken }))
    return { statusCode: 200, payload: { token: accessToken } };

}



module.exports = {
    userSignUpService,
    userSignInService,
    adminSignUpService,
    adminSignInService
}