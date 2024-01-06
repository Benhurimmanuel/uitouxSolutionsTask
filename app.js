require('dotenv').config();
const express = require('express');
const cors = require('cors');
const v1Routes = require('./API/V1');
const { connectDb } = require('./DB/connect');
const { errorHandler } = require('./HELPERS/ERROR_HANDLERS');
const logger = require('./HELPERS/LOGGER');

const app = express();
// db connect
connectDb();

// cors
app.options('*', cors());
app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    }),
);


// middlewares
app.use(express.json());

// Routes
app.use('/api/v1', v1Routes);
app.use('/api/ping', (req, res) => { res.send('pong'); });

// Error Handlers
app.use(errorHandler);

// server
app.listen(process.env.SERVER_PORT || 4000, () => {
    logger.info(`App running on port ${process.env.SERVER_PORT}`);
    console.log(`App running on port ${process.env.SERVER_PORT}`);
});





