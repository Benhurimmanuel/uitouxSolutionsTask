const { SIGN_UP, SIGN_IN, ADMIN_ACCOUNT, USER_ACCOUNT } = require("../../../CONSTANTS/variables");
const { userSignInService, userSignUpService, adminSignInService, adminSignUpService } = require("../SERVICE");

const userSignUpController = async (req, res, next) => {
    try {

        const user = SIGN_UP;
        const { method } = req;
        const route = req.originalURL;
        const signUpData = req.body;
        const { statusCode, payload } = await userSignUpService(signUpData, route, user, method, accountType = USER_ACCOUNT,);
        res.status(statusCode).send({ payload });
    } catch (error) {
        next(error);
    }
}
const userSignInController = async (req, res, next) => {
    try {
        const user = SIGN_IN;
        const { method } = req;
        const route = req.originalURL;
        const signInData = req.body;
        const { statusCode, payload } = await userSignInService(signInData, route, user, method, accountType = USER_ACCOUNT,);
        res.status(statusCode).send({ payload });
    } catch (error) {
        next(error);
    }
}
const adminSignUpController = async (req, res, next) => {
    try {

        const user = SIGN_UP;
        const { method } = req;
        const route = req.originalUrl;
        const signUpData = req.body;
        const { statusCode, payload } = await adminSignUpService(signUpData, route, user, method, accountType = ADMIN_ACCOUNT,);
        res.status(statusCode).send({ payload });
    } catch (error) {
        next(error);
    }
}
const adminSignInController = async (req, res, next) => {
    try {
        const user = SIGN_IN;
        const { method } = req;
        const route = req.originalURL;
        const signInData = req.body;
        const { statusCode, payload } = await adminSignInService(signInData, route, user, method, accountType = ADMIN_ACCOUNT,);
        res.status(statusCode).send({ payload });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    userSignUpController,
    userSignInController,
    adminSignUpController,
    adminSignInController
}