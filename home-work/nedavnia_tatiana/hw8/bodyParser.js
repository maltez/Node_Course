const types = {
  "application/x-www-form-urlencoded": body => decodeURIComponent(body),
  "application/json": body => JSON.parse(body)
};

module.exports = function(req, res, next) {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      req.body = types[req.headers['content-type']](body);
      next();
    })
  } else {
    next();
  }
};
