const { SIGN_UP, SIGN_IN, ADMIN_ACCOUNT, USER_ACCOUNT } = require("../../../CONSTANTS/variables");
const { userSignInService, userSignUpService, adminSignInService, adminSignUpService } = require("../SERVICE");

const userSignUpController = async (req, res, next) => {
    try {

        const user = SIGN_UP;
        const { method } = req;
        const route = req.originalURL;
        const { fullName, email, password, } = req.body;
        const { statusCode, payload } = await userSignUpService(fullName, email, password, route, user, method, accountType = USER_ACCOUNT,);
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
        const { email, password } = req.body;
        const { statusCode, payload } = await userSignInService(email, password, route, user, method, accountType = USER_ACCOUNT,);
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
        const { fullName, email, password, } = req.body;
        const { statusCode, payload } = await adminSignUpService(fullName, email, password, route, user, method, accountType = ADMIN_ACCOUNT,);
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
        const { email, password } = req.body;
        const { statusCode, payload } = await adminSignInService(email, password, route, user, method, accountType = ADMIN_ACCOUNT,);
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