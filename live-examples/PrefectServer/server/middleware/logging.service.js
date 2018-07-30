class LoggingMiddleware {
    constructor(loggingTransport) {
        this.loggingTransport = loggingTransport;

        this.info = this.info.bind(this);
    }

    info(req, res, next) {
        this.loggingTransport.log(`[${req.method}]:${req.hostname}${req.path} - ${res.statusCode}`);
        return next();
    }
}

module.exports = {
    LoggingMiddleware,
    logger: new LoggingMiddleware(console),
};
