const { createReadStream } = require('fs');
const { join } = require('path');
const iconv = require('iconv-lite');
const { Transform } = require('stream');

process.on('warning', (warning) => {
  console.log(warning.name.toUpperCase());
});

const test = new Transform({
  transform(chunk, filename) {
    const str = chunk.toString().split("\r\n"); 

    for (var i in str) {
      if(str[i].slice(- 1) === ' '){
        str[i] = str[i].substring(0, str[i].length - 1);
      }

      try {
        if(str[i].slice(- 1) != '.'){
          throw new Error('you will miss "."')
        }
      } catch (err) {
        console.log(err)
      }

      let words = str[i].split(" ");
      for (var k in words) {
        if(words[k] === 'fuck'){
          process.emitWarning('censored', 'MyWarning');
        }
      }      
    }
    this.push(chunk);
  }
});

const fileToBuffer = fn => {
  createReadStream(fn)
    .pipe(iconv.decodeStream('win1251'))
    .pipe(test);
}

fileToBuffer(join(__dirname, 'text.txt'));
