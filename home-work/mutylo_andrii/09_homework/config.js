module.exports = {
  apps : [
    {
      name      : 'API',
      script    : 'app.js',
      watch     : true,
      instances : 3,
      retry     : 3
    }
  ]
};