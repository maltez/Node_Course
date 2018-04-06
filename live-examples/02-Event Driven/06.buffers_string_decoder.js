const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if( chunk != null ) {
        const buffer = Buffer.from([chunk]);

        console.log(`With to string`, buffer.toString('utf8'));
        console.log(`With to string decoder`, decoder.write(buffer));
    } 
});