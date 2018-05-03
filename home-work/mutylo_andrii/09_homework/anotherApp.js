const { spawn } = require('child_process');

const child = spawn('pwd', ['.', '-type', 'f']);

child.stdout.on('data', (data) => {
    console.log(`child stdout:\n${data}`);
});

child.stderr.on('data', (data) => {
    console.error(`child error:\n${data}`);
});

child.on('exit', (code, signal) => {
    console.log(`Child process exited with code ${code}, signal ${signal}`);
});
