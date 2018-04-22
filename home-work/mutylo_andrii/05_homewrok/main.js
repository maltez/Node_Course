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
    this.push(chunk.toString().replace(/\n|\t|\v| |\r\n|\r/g, ''));
    return cb();
  }
});

const getWritePath = function (type, file) {
 let writeFile =config.output[type] + '/' + path.parse(file).name + '.min.' + type;
  return getPath(writeFile);
}

let jsStream, cssStream, htmlStream;

for(let file of files) {
  console.log('file', file)
  if (file.endsWith('.js')) {
    let writePath = getWritePath('js', file)
    jsStream = createWriteStream(writePath);
    readStream = createReadStream(file);
    readStream.on('data',(chunk) => {
      console.log('chunk',chunk);
    });

    readStream.on('end',(chunk) => {
      // tranStream.write(`\r\nJoyCasino.com`);
    });

    jsStream.on('finish', () => {
      jsStream.end();
    });

    readStream.pipe(tranStream).pipe(jsStream, {end: false});
  }
 else if (file.endsWith('.css')) {
  let writePath = getWritePath('css', file)
  jsStream = createWriteStream(writePath);
  readStream = createReadStream(file);
  readStream.on('data',(chunk) => {
    console.log('chunk',chunk);
  });

  readStream.on('end',(chunk) => {
    // tranStream.write(`\r\nJoyCasino.com`);
  });

  jsStream.on('finish', () => {
    jsStream.end();
  });

  readStream.pipe(tranStream).pipe(jsStream, {end: false});
 }
 else if (file.endsWith('.html')) {
  let writePath = getWritePath('html', file)
  jsStream = createWriteStream(writePath);
  readStream = createReadStream(file);
  readStream.on('data',(chunk) => {
    console.log('chunk',chunk);
  });

  readStream.on('end',(chunk) => {
    tranStream.write(`\r\nJoyCasino.com`);
  });

  jsStream.on('finish', () => {
    jsStream.end();
  });

  readStream.pipe(tranStream).pipe(jsStream, {end: false});
 }
}