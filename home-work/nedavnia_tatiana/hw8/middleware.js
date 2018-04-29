class Middleware {
  constructor() {
    this.middlewares = [];
    this.handle = this.handle.bind(this);
  }

  use(fn){
    if (typeof fn !== 'function') {
      throw new Error('Middleware must be a function');
    }
    const idx = this.middlewares.length;
    const func = (...args) => fn(...args, () => this.next(idx, ...args));
    this.middlewares = this.middlewares.concat(func);
  }

  next(idx, ...args) {
    if(idx + 1 < this.middlewares.length) {
      this.middlewares[idx + 1](...args);
      return;
    }
  }

  handle(...args) {
    this.middlewares[0](...args);
  }
}

module.exports = Middleware;
