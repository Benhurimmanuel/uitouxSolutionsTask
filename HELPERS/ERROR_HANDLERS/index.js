/* eslint-disable no-unused-vars */
// const logger = require('../LOGGER');

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
    const response = {
        status: false,
    };
    switch (error.name) {
        case 'ValidationError': {
            response.errName = error.name;
            response.message = error.details[0].message;
            res.status(422).send(response);
            break;
        }
        case 'JsonWebTokenError': {
            response.errName = error.name;
            response.message = error.message;
            // logger.error(JSON.stringify(response));
            res.status(422).send(response);
            break;
        }
        case 'TypeError': {
            response.errName = error.name;
            response.message = error.message;
            // logger.error(JSON.stringify(response));
            res.status(422).send(response);
            break;
        }
        case 'TokenExpiredError': {
            response.errName = error.name;
            response.message = error.message;
            // logger.error(JSON.stringify(response));
            res.status(422).send(response);
            break;
        }
        case 'ReferenceError': {
            response.errName = error.name;
            response.message = error.message;
            // logger.error(JSON.stringify(response));
            res.status(422).send(response);

            break;
        }
        default: {
            response.errName = error.name;
            response.message = error.message;
            // logger.error(JSON.stringify(response));
            res.status(400).send(response);
        }
    }
};

module.exports = {
    errorHandler,
};
