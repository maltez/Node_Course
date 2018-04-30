const { spawn } = require('child_process');

const child = spawn('echo $ANSWER && find', ['.', '-type', 'f'], {
    stdio: 'inherit',
    shell: true,
    cwd: './',
    env: {ANSWER: 'Script is running'}
});