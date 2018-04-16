const { createReadStream, createWriteStream } = require('fs');

const originalStream = createReadStream('VoynaMir.txt');
const copyStream = createWriteStream('VoynaMirCopy.txt');
let counter = 0;

originalStream.pipe(copyStream, {end: false});

originalStream.on('end', () => {
    console.log('Read end');
    copyStream.write('\r\nJoyCasino.com');
    copyStream.end('\r\nСильно поднял');
});

copyStream.on('drain', () => {
    console.log('Write stream resumed');
});

originalStream.on('data', (chunk) => {
    counter += 1;
    console.log(`Chunk #${counter}`);
});



