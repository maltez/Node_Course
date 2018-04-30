const cluster = require('cluster');
const os = require('os');

const numberOfUsersInDb = function(){
        this.count = this.count || 5;
        this.count = this.count * this.count;

        return this.count;
}

if(cluster.isMaster){
    const cpus = os.cpus().length;

    console.log(`Forking for ${cpus} CPUs`);
    for(let i = 0; i < cpus; i++){
        cluster.fork();
    }

    const updateWorkers = () => {
        const userCount = numberOfUsersInDb();
        Object.values(cluster.workers).forEach(
        (worker) => {
            worker.send({userCount});
        }
        );
    }
    updateWorkers();
    setInterval(updateWorkers, 5000);
} else {
    require('./server');
}
