const {createServer} = require('http');

class Route {
  constructor(method, url, func) {
    this.method = method;
    this.url = url;
    this.func = func;
  }
}

class Express {
  constructor() {
    this.routes = new Map();
    this.server = this._createServer();
  }

  listen(port, host, fn) {
    this.server.listen(port, host, fn);
  }

  get(url, func) {
    this._use(new Route('GET', url, func));
  }

  post(url, func) {
    this._use(new Route('POST', url, func));
  }

  put(url, func) {
    this._use(new Route('PUT', url, func));
  }

  delete(url, func) {
    this._use(new Route('DELETE', url, func));
  }

  _getRoute(method, url) {
    const urlRoutes = this.routes.get(url);
    if (urlRoutes) {
      return urlRoutes.get(method);
    }
  }

  _createServer() {
    const server = createServer();
    server.on('request', async (req, res) => {
      req.body = await this._parseBody(req);
      const route = this._getRoute(req.method, req.url);
      if (!route) {
        res.end('Route not found');
      } else {
        route(req, res);
      }
    });

    return server;
  }

  async _parseBody(req) {
    let data = '';
    let request;

    return new Promise((res, rej) => {
      req.on('data', chunk => {
        data += chunk.toString();
      });

      req.on('end', () => {
        if (data.length > 0) {
          request = JSON.parse(data);
          res(JSON.stringify(request));
        }
      });
    });
  }

  _use(newRoute) {
    const route = this.routes.get(newRoute.url);

    if (!route) {
      const routeMethods = new Map();
      this.routes.set(newRoute.url, routeMethods.set(newRoute.method, newRoute.func));
    } else {
      route.set(newRoute.method, newRoute.func);
    }
  }
}

module.exports = () => {
  const app = new Express();

  return app;
};
