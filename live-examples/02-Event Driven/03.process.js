process.on('exit', (code) => {
    // do one final synchronous operation
    // before node process terminated
    console.log(`Application closed with code ${code}`);
});

process.on('uncaughtException', (err) => {
    // Something went unhandled. 
    //Do any cleanup and exit anyway. 
    console.log(`Error appears ${err}`);
    process.exit(1);
});

process.stdin.resume();

console.dog();