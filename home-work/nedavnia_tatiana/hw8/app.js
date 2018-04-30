const { createServer } = require('http');
const Middleware = require('./middleware');
const Router = require('./router');
const bodyParser = require('./bodyParser');

const app = new Middleware();
const router = new Router();

app.use(bodyParser);

router.get('/', (req, res) => {
  res.end('ok');
});

router.get('/index', (req, res) => {
  res.write(`
 <!doctype html>
    <html>
        <body>
            <form action="/" method="post">
                <input type="text" name="text">
                <input type="submit">
            </form>
        </body>
    </html>
  `);
  res.end();
});

router.post('/', (req, res) => {
  res.end(JSON.stringify(req.body));
});

app.use(router.handle);

createServer(app.handle).listen(3000, 'localhost');