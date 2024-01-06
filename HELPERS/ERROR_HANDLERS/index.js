/* eslint-disable no-unused-vars */
// const logger = require('../LOGGER');

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
    const response = {
        status: false,
        errName: error.name,
        message: error.message
    };
    switch (error.name) {
        case 'ValidationError': {
            // response.message = error.details[0].message;
            // res.status(422).send(response);
            break;
        }
        case 'JsonWebTokenError': {
            res.status(401).send(response);
            break;
        }
        case 'TypeError': {
            res.status(400).send(response);
            break;
        }
        case 'TokenExpiredError': {
            res.status(401).send(response);
            break;
        }
        case 'ReferenceError': {
            res.status(422).send(response);
            break;
        }
        default: {
            res.status(400).send(response);
        }
    }
};

module.exports = {
    errorHandler,
};
