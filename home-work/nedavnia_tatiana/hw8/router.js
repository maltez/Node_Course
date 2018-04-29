const { METHODS } = require('http');
const { parse } = require('url');

class Router {
  constructor() {
    this.GET = {};
    this.POST = {};
    this.handle = this.handle.bind(this);
  }

  get(pathname, cb) {
    this.GET[pathname] = cb;
  }

  post(pathname, cb) {
    this.POST[pathname] = cb;
  }

  handle(req, res, next) {
    const { method } = req;
    const { pathname } = parse(req.url);

    if (!METHODS.includes(method)) {
      throw new Error('method is not supported');
    }

    if (!this[method] || !this[method][pathname]) {
      res.statusCode = 404;
      res.statusMessage = 'Not found';
      res.end();
      return;
    }

    this[method][pathname](req, res, next);
  }
}

module.exports = Router;
