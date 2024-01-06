// DB connection
const mongoose = require('mongoose');
// const logger = require('../HELPERS/LOGGER');

const connectDb = () => mongoose.connect(process.env.MONGODB_URL,)
    .then((data) => {
        console.log('Connected to database...');
        return true;
    })
    .catch((err) => {
        console.error('Could not connect to database ...');
    });
module.exports = { connectDb };
