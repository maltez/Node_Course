const app = require('./express')();

const port = 3020;

app.get('/endpoint1/child', (req, res) => {
  res.write(`This is endpoint for ${req.url}`);
  res.end();
});

app.put('/endpoint1/child', (req, res) => {
  res.end(`Data ${req.body} updated`);
});


app.listen(port, 'localhost', () => {
  console.log(`Server listen port ${port}...`);
});
