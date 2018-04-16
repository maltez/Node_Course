const { createReadStream } = require('fs');
const { join } = require('path');

const data = createReadStream(join(__dirname, 'VoynaMir.txt'));

let reducer = [];

data.on('data', (chunk) => {
    console.log(chunk.toString());
    if (reducer.length > 4) {
        data.emit('end');
    }
});

data.on('end', () => {
    console.log(reducer);
    console.log('This is the end');
    console.log(`Tpotal chunks count are ${reducer.length}`);
});

data.on('error', (err) => {
    console.log(`Error appears`);
})

console.log(data.eventNames());
    