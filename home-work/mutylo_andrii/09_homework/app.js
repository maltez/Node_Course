const app = require('express')();

app.get('/', (req, res) => {
    res.json({status: 200, message: 'Working'});
});

app.listen(3000, () => {
    console.log('Server listen on localhost:3000');
});

setTimeout(() => {
  process.exit(1); // Death process
}, 2000);