const { Router } = require('express');
const { logger } = require('../middleware/logging.service');

const route = Router();
route.use(logger.info);

route.get('/', (req, res) => {
    res.json({
        status: 200,
        message: 'get OK',
    });
});

route.post('/', (req, res) => {
    res.json({
        status: 200,
        message: 'post OK',
    });
});

module.exports = route;
