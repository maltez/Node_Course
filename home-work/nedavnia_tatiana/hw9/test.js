const { createServer } = require('http');
createServer((req, res) => {
  res.end('OK');
})
  .listen(3000);

