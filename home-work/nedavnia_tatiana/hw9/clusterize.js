const cluster = require('cluster');
const { resolve } = require('path');
const { watch } = require('fs');

const {executable, instanceNum, maxAttempts, allowParentStdout, watcher } = require('./config');

const clusterize = (init) => {
  let attempts = 0;
  if (init) {
    cluster.setupMaster({
      exec: resolve(__dirname, executable),
      silent: allowParentStdout
    });
  }

    for (let i = 0; i < instanceNum; i += 1) {
      cluster.fork();
    }

    cluster.on('exit', (code) => {
      if(code && attempts < maxAttempts) {
        cluster.fork();
        attempts++;
      }
    });
};

const change = (type) => {
  if(type !== 'change') return;
  Object.keys(cluster.workers).forEach(id => cluster.workers[id].kill('SIGTERM'));
  clusterize();
};

if(cluster.isMaster) {
  if (watcher) {
    watch(resolve(__dirname, executable), { presistent: true, recursive: true}, change);
    clusterize(true);
  } else {
    clusterize(true);
  }
}
