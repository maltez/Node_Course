module.exports = (req, res, next) => {
    process.stdout.write(`[${req.method}]: ${req.url}`);
    next();
};
