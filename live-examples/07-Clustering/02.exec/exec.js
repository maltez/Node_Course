const { exec } = require('child_process');

exec('ls', (err, stdout, stderr) =>{
    if(err){
        console.log(`exec err: ${err}`);
    }

    console.log(`File list: ${stdout}`);
});
