const logger = require('../../../HELPERS/LOGGER/index');

/*
 * @param {req, res, next} object,object,function
 * @desc  prints the log on entry to any service layer function
 */
const generateLog = async (route, user, method, accountType, payload) => {
    logger.info(`requestMethod:${method} route=${route} accountType=${accountType}  userId=${user} payload =${payload}`);
};

module.exports = { generateLog };
