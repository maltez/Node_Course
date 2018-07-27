const { createReadStream, createWriteStream } = require('fs');

const readStream = createReadStream('./VoynaMir.txt');
const writeStream = createWriteStream('./VoynaMir.copy.txt');

readStream.pipe(writeStream, {end: false});

readStream.on('end', () => {
    writeStream.write('\n\r JoyCasino.com');
})

