const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const index = require('./routes/index');

const app = express();

app.engine('handlebars', exphbs({
    defaultLayout: 'main.handlebars',
    layoutsDir: path.resolve(__dirname, 'views/layouts'),
}));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'handlebars');


app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/', index);

app.get('/hbs', (req, res) => {
    res.render('home');
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
