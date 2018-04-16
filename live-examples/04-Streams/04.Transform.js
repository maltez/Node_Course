const { Transform } = require('stream');

const stream = new Transform({
    transform(chunk, encoding, cb) {
        this.push(`${chunk.toString()} \r\nJoyCasino.com\r\n`);
        return cb();
    }
});

process.stdin.pipe(stream).pipe(process.stdout);