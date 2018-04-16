const { createWriteStream, createReadStream } = require('fs');
const { createGzip } = require('zlib');

createReadStream('VoynaMir.txt')
    .pipe(createGzip())
    .pipe(createWriteStream('VoynaMir.gz'))
    .on('finish', () => {
        console.log('File was zipped');
    });