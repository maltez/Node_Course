const { Router } = require('express');
const { factorial } = require('../services/factorial.service');
const { logger } = require('../middleware/logging.service');

const route = Router();
route.use(logger.info);

route.get('/', (req, res) => {
    res.json({
        status: 200,
        message: 'get OK',
    });
});

route.get('/:num', (req, res) => {
    res.json({
        status: 200,
        message: factorial(req.params.num),
    });
});

route.post('/', (req, res) => {
    res.json({
        status: 200,
        message: 'post OK',
    });
});

module.exports = route;
