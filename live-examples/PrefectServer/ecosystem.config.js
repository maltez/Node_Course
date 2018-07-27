module.exports = {
  apps : [{
    name      : 'API',
    script    : './.bin/www',
    env: {
      PORT: 3000,
      HOST: 'localhost',
    },
    watch: true,
  }],
};
