const { createReadStream } = require('fs');
const path = require('path');
const http = require('http');

const assetsPath = asset =>  `${path.join(__dirname, 'assets', asset)}/`;

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
  const url = req.url;

  switch (url) {
    case '/':  {
      createReadStream(`${assetsPath('html')}index.html`).pipe(res).on('end', () => res.end());
    break;
    }
    case '/about':  {
      createReadStream(`${assetsPath('html')}about.html`).pipe(res).on('end', () => res.end());
    break;
    }
    case '/contact': {
      createReadStream(`${assetsPath('html')}contact.html`).pipe(res).on('end', () => res.end());
    break;
    }
    default: {
      createReadStream(`${assetsPath('html')}404.html`).pipe(res).on('end', () => res.end());
    break;
    }
  }
})
.listen(3000, () => console.log("Server start at port 3000")); 