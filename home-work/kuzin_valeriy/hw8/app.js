const server = require('http').createServer();
const { OK, NOT_FOUND } = require('http-status-codes');

server.on('request', (req, res) => {

    // route by url
    switch (req.url) {
        case '/':
            res.writeHead(OK, { 'content-type': 'text/plain' });
            res.end('Hello!!!');
            break;
        case '/data':

            if (req.method === 'POST') {
                // console.log('Headers: ' + JSON.stringify(req.headers));
                req.on('data', (body) => {
                    // console.log('Body: ' + body);
                    let msg = JSON.stringify({
                        status: OK,
                        message: JSON.parse(body)
                    });

                    // response json with body request
                    res.end(msg);
                });

            } else {
                res.writeHead(OK, { 'content-type': 'text/plain' });
                res.end('List Data');
            }
            break;
        default:
            // 404 Page not Found
            res.writeHead(NOT_FOUND);
            res.end('Page Not Found');
    }

});

server.listen(8000);

server.on('listening', () => {
    console.log('Server running on port 8000')
});