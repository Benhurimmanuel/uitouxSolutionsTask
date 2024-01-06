const { getuserProfileService, updateUserProfileService } = require("../SERVICE");

const getuserProfileController = async () => {
    try {
        const user = NEW_USER_SIGNUP_USERID;
        const accountType = NEW_USER_SIGNUP_USERTYPE;
        const { method } = req;
        const route = req.originalUrl;
        const { statusCode, payload } = await getuserProfileService(user, method, accountType, route);
        res.status(statusCode).send({ payload });
    } catch (error) {
        next(error);
    }
}

const updateUserProfileController = async () => {
    try {
        const user = NEW_USER_SIGNUP_USERID;
        const accountType = NEW_USER_SIGNUP_USERTYPE;
        const { method } = req;
        const route = req.originalUrl;
        const { statusCode, payload } = await updateUserProfileService(user, method, accountType, route);
        res.status(statusCode).send({ payload });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getuserProfileController,
    updateUserProfileController
}