module.exports = function(req, res, next) {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      req.body = body;
      next();
    })
  } else {
    next();
  }
};
