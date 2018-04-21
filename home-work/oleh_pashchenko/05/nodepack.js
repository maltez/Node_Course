const {
  createReadStream, createWriteStream, readFileSync, readdir, existsSync, mkdirSync,
} = require('fs');
const { createGzip } = require('zlib');
const { Transform } = require('stream');

const nodepack = (function nodepackInit() {
  const minify = Symbol('minify');
  const readFolder = Symbol('readFolder');
  const readFile= Symbol('readFile');
  const minifyFile = Symbol('minifyFile');
  const readConfig = Symbol('readConfig');
  const createBundle = Symbol('createBundle');
  const config = Symbol('config');
  const createArchive = Symbol('createArchive');

  class Nodepack {
    run() {
      this[readConfig]();

      if (this[config].minify) {
        this[minify]();
      }

      if (this[config].bundleFilder) {
        this[createBundle]();
      }

      if(this[config].archiveName) {
        this[createArchive]();
      }
    }

    [readConfig]() {
      const configFile = readFileSync('./nodepack.json');

      if (!configFile) {
        throw new Error('Can not read config file \'nodepack.json\'');
      }

      this[config] = JSON.parse(configFile);
    }

    [minify]() {
      this[config].minify.forEach((element) => {
        this[readFolder]('./', element);
      });
    }

    [readFolder](path, element, isBundle) {
      readdir(path, (err, files) => {
        if (err) throw err;
        files.forEach((file) => {
          if (file.includes(element) && file.includes('.') && !file.includes('min.') && file !== 'nodepack.json') {
            const filePath = `${path}/${file}`.replace('//', '/');
            if (isBundle) {
              this[minifyFile](filePath, this[config].bundleFilder);
            } else this[minifyFile](filePath);
          }

          if (!file.includes('.')) {
            const folderPath = `${path}/${file}`;
            this[readFolder](folderPath, element, isBundle);
          }
        });
      });
    }

    [minifyFile](file, path) {
      const minFile = file.split('/');
      let filePath = null;
      if(path) {
        filePath = `${path}/${minFile[minFile.length - 1]}`;
        console.log(filePath);
      } else {
        minFile[minFile.length - 1] = `min.${minFile[minFile.length - 1]}`;
        filePath = minFile.join('/');
      }


      const readStream = createReadStream(file);
      const writeStream = createWriteStream(filePath);

      const transformStream = new Transform({
        transform(chunk, encoding, cb) {
          this.push(chunk.toString().replace(/\n|\t|\v| |\r\n|\r/g, ''));
          return cb();
        },
      });

      readStream.pipe(transformStream).pipe(writeStream);

      writeStream.on('finish', () => {
        writeStream.end();
      });
    }

    [createBundle]() {
          if (this[config].bundleFilder) {
            if (!existsSync(this[config].bundleFilder)) {
              mkdirSync(this[config].bundleFilder);
            }
          }

          this[readFolder]('./', 'js', true);
          this[readFolder]('./', 'css', true);
    }

    [createArchive]() {
     // TODO: Archive folder
    }
  }

  return new Nodepack();
}());

nodepack.run();
