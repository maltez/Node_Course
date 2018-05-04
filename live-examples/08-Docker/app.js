const app = require('express')();


app.get('/', (req, res) => {
    res.json({
        message: 'Hello',
         status: 200
        });
});

app.listen(3000, () => {
    console.log('Server listen on port 3000');
});