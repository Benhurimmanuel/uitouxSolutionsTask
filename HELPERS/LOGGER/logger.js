const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');

const {
    combine, timestamp, colorize, printf,
} = format;
const errorTimeStampFormat = 'DD|MM|YYYY HH:mm:ss';

const transport = new (transports.DailyRotateFile)({
    level: 'info',
    dirname: 'logs',
    filename: 'application-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    maxSize: '20m',
    maxFiles: '2',
});

const transportError = new (transports.DailyRotateFile)({
    level: 'error',
    dirname: 'logs',
    filename: 'errors-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    maxSize: '20m',
    maxFiles: '2',
});

// eslint-disable-next-line no-shadow
const myFormat = printf(({ level, message, timestamp }) => `${timestamp} [${level}]: ${message}`);

const devLogger = () => createLogger({
    format: combine(colorize(), timestamp({ format: errorTimeStampFormat }), myFormat),
    transports: [transportError, transport, new transports.Console()],
});


module.exports = { devLogger, };
