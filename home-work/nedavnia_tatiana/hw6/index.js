const { createReadStream, readdir } = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const { src, warningOn, endLine } = require('./config.json');
const { exit, emitWarning } = process;

class LinterError extends Error {
  constructor(...rest) {
    super(...rest);
    Error.captureStackTrace(this, LinterError);
  }
};

const errorTrigger = new RegExp(`[^${endLine}]\\r\\n`, "g");
const warningTrigger = new RegExp (`(${warningOn.join('|')})`, 'g');

const check = file => new Promise((res, rej) => {
  let firstWarning = true;

  createReadStream(file)
    .on('data', function(chunk){
      const data = chunk.toString();

      if(data.match(warningTrigger) && firstWarning){
        emitWarning(`word ${data.match(warningTrigger)[0]} is not allowed for usage`, 'Linter Warning');
        firstWarning = false;
      }

      if(data.match(errorTrigger)){
       rej( new LinterError(`error at ${file}: line break should be preceded by "${endLine}"`));
      }

      res(true);
    })
});

async function sequalizeLinter(files) {
  for( let i = 0; i < files.length; i += 1) {
    await check(files[i]);
  }
}

promisify(readdir)(src)
  .then(files => files.map(file => join(src, file)))
  .then(sequalizeLinter)
  .catch((err) => {
    console.error(err)
    exit(1);
  });
