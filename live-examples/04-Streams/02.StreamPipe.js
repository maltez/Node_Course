const { createReadStream, createWriteStream } = require('fs');

const originalStream = createReadStream('VoynaMir.txt');
const copyStream = createWriteStream('VoynaMirCopy.txt');
let counter = 0;

originalStream.on('data', (chunk) => {
    counter += 1;
    copyStream.write(chunk, () => {
        console.log(`Chunk ${counter} is writing`);
    })
});

originalStream.on('end', () => {
    console.log('Read end');
    copyStream.end();
});

copyStream.on('end', () => {
    console.log('File was successfully copied');
});
