const { createReadStream, createWriteStream, readdir, unlink, mkdir } = require('fs');
const { extname, format, join } = require('path');
const { promisify } = require('util');
const { Transform } = require('stream');
const { createGzip } = require('zlib');

const { src, dest, destName } = require('./config.json');

const clearComments = {
  '.html': text => text.replace(/<!--.+?-->/g, ''),
  '.js': text => text.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, ''),
  '.css': text => text.replace(/\/\*.*?\*\//g, '')
};

const minify = {
  '.html': file => new Promise((resolve, reject) => {
    const ext = extname(file);
    const name = format({ext, dir: dest, name: `${destName || 'bundle'}.min`});

    const transform = new Transform({
      transform(chunk, enc, cb) {
        const text = clearComments[ext](chunk.toString());
        this.push(text.replace(/\s{2,}/g, ''));
        cb()
      },

      flush(cb) {
        this.push('\r\n &copy; JoyCasino.com');
        cb();
      }
    });

    createReadStream(file)
      .pipe(transform)
      .pipe(createWriteStream(`./${name}`))
      .on('finish', () => {
        resolve(true);
      })
      .on('error', (error) => {
        reject(error);
      });
  }),

  '.js': file => new Promise((resolve, reject) => {
    const ext = extname(file);
    const name = format({ext, dir: dest, name: `${destName || 'bundle'}.min`});

    let first = true;
    const transform = new Transform({
      transform(chunk, enc, cb) {
        let text;
        if (first) {
          text = `(function(){${clearComments[ext](chunk.toString())}`;
          first = false;
        } else {
          text = clearComments[ext](chunk.toString());
        }
        this.push(text.replace(/\s{2,}/g, ''));
        cb()
      },

      flush(cb) {
        this.push('}());');
        cb();
      }
    });

    createReadStream(file)
      .pipe(transform)
      .pipe(createWriteStream(`./${name}`, {flags: 'a'}))
      .on('finish', () => {
        resolve(true);
      })
      .on('error', (error) => {
        reject(error);
      });
  }),

  '.css': (file) => new Promise((resolve, reject) => {
    const ext = extname(file);
    const name = format({ext, dir: dest, name: `${destName || 'bundle'}.min`});

    const transform = new Transform({
      transform(chunk, enc, cb) {
        let text = clearComments[ext](chunk.toString());
        this.push(text.replace(/\s{2,}/g, ''));
        cb()
      }
    });

    createReadStream(file)
      .pipe(transform)
      .pipe(createWriteStream(`./${name}`, {flags: 'a'}))
      .on('finish', () => resolve(true))
      .on('error', (error) => reject(error));
  }),
};

const archive = file => new Promise((resolve, reject) => {
  let first = true;
  const transform = new Transform({
    transform(chunk, enc, cb) {
      let text;
      if (first) {
        text = `\n----filename ${file} start----\n${chunk.toString()}`;
      } else {
        text = chunk.toString();
      }
      this.push(text);
      cb();
    },

    flush(cb) {
      this.push(`\n----filename ${file} end----\n`)
      cb()
    }
  });

  createReadStream(file)
    .on('end', () => unlink(file, (err) => {
      if (err) throw err;
    }))
    .pipe(transform)
    .pipe(createGzip())
    .pipe(createWriteStream(join(dest, './archive.gz'), {flags: 'a'}))
    .on('finish', () => resolve(true))
    .on('error', (error) => reject(error));
});

async function sequalizeStreams(files) {
  for (let i = 0; i < files.length; i += 1) {
    const path = join(src, files[i]);
    await minify[extname(files[i])](path);
  }

  promisify(readdir)(dest)
    .then(files => files.map(file => join(dest, file)))
    .then(files => {
      sequalizeArchive(files);
    });
}

async function sequalizeArchive(files) {
  for (let i = 0; i < files.length; i += 1) {
    await archive(files[i]);
  }
}

promisify(readdir)(dest)
  .catch(err => {
    if(err.code === 'ENOENT') {
      return promisify(mkdir)(join(__dirname, dest));
    } else throw err;
  })
  .then(dir => promisify(readdir)(dest))
  .then(files => files.map(file => join(dest, file)))
  .then(files => Promise.all([files.map(file => promisify(unlink)(file))]))
  .then(() => {
    readdir(src, function (err, files) {
      if (err) throw err;
      sequalizeStreams(files);
    });
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
