const { createReadStream, createWriteStream, readFileSync, existsSync, mkdirSync, readdirSync, statSync } = require('fs');
const path = require('path');
const { Transform } = require('stream');
const getPath = filename => path.join(__dirname, filename);
const config = JSON.parse(readFileSync(getPath('config.json'), 'utf8'));


// make dir's
Object.values(config.output).forEach(value => {
  if (!existsSync(getPath(value))) mkdirSync(getPath(value));
});

// read files
const getFiles = dir =>
  readdirSync(dir).reduce((files, file) => {
    files = !files ? [] : files;
    if (!file.startsWith('.')) {
      const name = path.join(dir, file);
      const isDirectory = statSync(name).isDirectory();
      return isDirectory ? [...files, ...getFiles(name)] : [...files, name];
    }
  }, []);

const files = getFiles(path.join(__dirname, config.input));
console.log('files', files)
const tranStream = new Transform({
  transform(chunk, encoding, cb) {
    this.push(chunk);
    return cb();
  }
});

let jsStream, cssStream, htmlStream;

for(let file of files) {
  if (file.endsWith('.js')) {
    let writeFile = path.parse(file).name + '.min.js';
    jsStream = createWriteStream(getPath(writeFile));

    readStream = createReadStream(file);
    readStream.on('data',(chunk) => {
      console.log(chunk.length);
    });

    readStream.on('end',(chunk) => {
      console.log('TEST')
      tranStream.write(`\r\nJoyCasino.com`);
    });
    readStream.pipe(tranStream).pipe(jsStream, {end: false});
  }
//  else if (file.endsWith('.css')) {
//    readStream = createReadStream(file);
//    readStream.pipe(tranStream).pipe(cssStream, {end: false});
//  }
//  else if (file.endsWith('.html')) {
//    readStream = createReadStream(file);
//    readStream.pipe(tranStream).pipe(htmlStream, {end: false});
//  }
}


//
//readStream.on('error', (err) => {
//  console.log(`Error: ${err.message}`);
//});