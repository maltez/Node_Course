const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const index = require('./routes/index');
const users = require('./routes/users');

const app = express();
app.use(bodyParser.json());

app.engine('handlebars', exphbs({
    defaultLayout: 'main.handlebars',
    layoutsDir: path.resolve(__dirname, 'views/layouts'),
}));

app.use('/', index);
app.use('/users', users);

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'handlebars');


app.use('/static', express.static(path.join(__dirname, 'public')));


app.get('/hbs/:name', (req, res) => {
    res.render('home', { name: req.params.name });
});

app.get('/hbs/', (req, res) => {
    res.render('extraLarge');
});

app.use((req, res, next) => {
    res.status(404);
    res.json({
        status: 404,
        message: 'Route not found',
    });
    next();
});

app.use((err, req, res, next) => {
    res.status(500);
    res.json({
        status: 500,
        message: err.message,
    });
    next();
});

module.exports = app;
