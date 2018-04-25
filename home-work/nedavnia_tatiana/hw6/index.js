const { createReadStream, readdir } = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const { src, warningOn, endLine } = require('./config.json');
const { exit, emitWarning } = process;

const errorTrigger = new RegExp(`[^${endLine}]\\r\\n`, "g");
const warningTrigger = new RegExp (`(${warningOn.join('|')})`, 'g');

async function check(files) {
  for( let i = 0; i < files.length; i += 1) {
    const file = files[i];

    await new Promise((res, rej) => {
      let firstWarning = true;

      createReadStream(file)
        .on('data', function(chunk){
          const data = chunk.toString();

          if (data.match(warningTrigger) && firstWarning) {
            emitWarning(`word ${data.match(warningTrigger)[0]} is not allowed for usage`, 'Linter Warning');
            firstWarning = false;
          }

          if (data.match(errorTrigger) ){
            rej( new Error(`error at ${file}: line break should be preceded by "${endLine}"`));
          }

          res(true);
        })
    });
  }
}

promisify(readdir)(src)
  .then(files => files.map(file => join(src, file)))
  .then(check)
  .catch((err) => {
    console.error(err)
    exit(1);
  });
