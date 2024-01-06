const jwt = require('jsonwebtoken')
const { USER_ACCOUNT, ADMIN_ACCOUNT } = require("../API/V1/CONSTANTS/variables");
const { getSingleData } = require('../DB/wrapper');
const { User } = require('../DB/SCHEMA/user');
const { Admin } = require('../DB/SCHEMA/admin');
const { generateLog } = require('../API/V1/UTILS/loggerUtils');
const { ACCESS_TOKEN_MISSING } = require('../API/V1/CONSTANTS/httpConstants');

const isAuth = async (req, res, next) => {
    try {

        if (!req.headers.authorization) {
            generateLog(undefined, undefined, undefined, undefined, ACCESS_TOKEN_MISSING);
            res.status(401).send(ACCESS_TOKEN_MISSING);
        }
        const token = req.headers.authorization.replace('Bearer ', '');
        if (!token) {
            generateLog(undefined, undefined, undefined, undefined, ACCESS_TOKEN_MISSING);
            res.status(401).send(ACCESS_TOKEN_MISSING);
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { accountType, userId, email, } = decoded

        if (accountType === USER_ACCOUNT) {
            let user;
            const userData = await getSingleData(User, { email: decoded.email });
            if (userId !== userData.data.id) {
                generateLog(undefined, undefined, undefined, undefined, UNAUTHORIZED_ACCESS_MESSAGE);
                res.status(401).send(UNAUTHORIZED_ACCESS_MESSAGE);
            }
            req.user = userId;
            req.accountType = accountType;
            req.userEmail = email;
            next()
        }
        else if (accountType === ADMIN_ACCOUNT) {
            let user;
            const userData = await getSingleData(Admin, { email: decoded.email });
            if (userId !== userData.data.id) {
                generateLog(undefined, undefined, undefined, undefined, UNAUTHORIZED_ACCESS_MESSAGE);
                res.status(401).send(UNAUTHORIZED_ACCESS_MESSAGE);
            }
            req.user = userId;
            req.accountType = accountType;
            req.userEmail = email;
            next()
        } else {
            generateLog(undefined, undefined, undefined, undefined, UNAUTHORIZED_ACCESS_MESSAGE);
            res.status(401).send(UNAUTHORIZED_ACCESS_MESSAGE);
        }
    } catch (error) {
        next(error);
    }
};


module.exports = { isAuth }