const app = require('express')();
const { OK } = require('http-status-codes');
const logger = require('./services/logger.service');

app.use(logger);
app.get('/url', (req, res) => {
    const message = {
        status: OK,
        message: `Request to:[${req.method}] ${req.headers.host}${req.url}`,
    };

    res.status(OK);
    res.json(message);
});

app.get('/', (req, res) => {
    const message = {
        status: OK,
        message: 'Hello',
    };
    res.json(message);
});

module.exports = app;
