const config = require('./config');
const cluster = require('cluster');

let workerStorage = {};
// workerStorage structure:
//  {
//    'appname1' :{
//      'worker1Id' : 0,
//      'worker2Id' : 1
//    },
//      'appname2' : {
//        worker1Id' : 0,
//         'worker2Id' : 1,
//        worker1Id' : 0,
//        'worker2Id' : 1
//  }


if(cluster.isMaster) {

  for (app of config.apps){
    console.log(`App started ${app.name}`);
    cluster.setupMaster({
      exec : app.script
    });

    cluster.on('fork', worker => {
      console.log(`Worker of app: ${app.name} started with id ${worker.process.pid}`);
      if (!workerStorage[`${app.name}`]) {
        // Save initial restart attempts with new worker;
        workerStorage[`${app.name}`] = {};
        workerStorage[`${app.name}`][worker.process.pid] = 0;
      }
      console.log('workerStorage', workerStorage);
    });

    cluster.on('exit', (deadWorker, code, signal) => {
      const oldPID = deadWorker.process.pid;
      console.log('----------------')
      console.log(`The worker #${oldPID} has disconnected`);
      console.log(`app ${app.name} restarted attempts: `,
        workerStorage[`${app.name}`][oldPID]);
      if (workerStorage[`${app.name}`][oldPID] <= app.retry) {
        console.log('----------------')
        console.log('We can retry to restart worker again');
        console.log('worker %d died (%s). restarting...',
                      deadWorker.process.pid, signal || code);
        const worker = cluster.fork();

        // Note the process IDs;
        const newPID = worker.process.pid;

        // get attempts to restart the worker;
        const attempts = workerStorage[`${app.name}`][oldPID];

        // save attempts number with newly created worker;
        workerStorage[`${app.name}`][newPID] = attempts;

      }
      else {
        console.log('Can  not retry to restart worker again. Attempts finished');
      }

    });

    for (let i=0; i < app.instances; i +=1) {
      cluster.fork()
    }
  }


} else if (cluster.isWorker) {
    console.log('I am worker #' + cluster.worker.id);
}
