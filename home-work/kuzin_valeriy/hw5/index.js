const {readdir, createReadStream, createWriteStream} = require('fs');
const {Transform} = require('stream');

const config = require('./app/config/assets.json');

for (let params in config) {

  let localDir = `${__dirname}/app/assets${config[params]}`;
  let writeStream = createWriteStream(`${__dirname}/app/assets/local.${params}`);
  let shrinkData = new Transform({
    transform(chunk, encoding, cb) {
      this.push(`${chunk.toString().replace(/(?<!function|class)\s/g, '')}`);
      return cb();
    }
  });

  readdir(localDir, (err, files) => {
    files.forEach(file => {
      if (file.endsWith(`.${params}`)) {
        let readStream = createReadStream(`${localDir}/${file}`);
        readStream.pipe(shrinkData).pipe(writeStream, {end: false});
        //console.log(file);
      }
    });
  })
}




