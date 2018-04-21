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
    // ToDo create counter files only current type
    let allFiles = files.length;
    let numberFiles = 0;
    files.forEach(file => {
      if (file.endsWith(`.${params}`)) {
        numberFiles += 1;
        let readStream = createReadStream(`${localDir}/${file}`);

        readStream.pipe(shrinkData).pipe(writeStream, {end: numberFiles === allFiles});
        //console.log(file);
      }
    }); 
  });
}
