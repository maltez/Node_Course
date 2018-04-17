const { createReadStream, createWriteStream, readFileSync, existsSync, mkdirSync } = require('fs');
const { join } = require('path');
const { getAllFiles } = require('./modules/getAllFiles');
const files = getAllFiles(join(__dirname, './example-project'));
const getPath = filename => join(__dirname, filename);
const config = JSON.parse(readFileSync(getPath('config.json'), 'utf8'));
const { Transform } = require('stream');
// Create an output dir
if (!existsSync(getPath(config.output_dir))){
    mkdirSync(getPath(config.output_dir));
}
const transformationStream = new Transform({
    transform(chunk, encoding, cb) {
        this.push(chunk);
        return cb();
    }
});
let data;

const jsStream = createWriteStream(getPath(`${config.output_dir}/${config.output_js}`));
const cssStream = createWriteStream(getPath(`${config.output_dir}/${config.output_css}`));
files.forEach(element => {
    
    if (element.endsWith('.js')) {
        data = createReadStream(element);
        data.pipe(transformationStream).pipe(jsStream, {end: false});
    } 
    else if (element.endsWith('.css')) {
        data = createReadStream(element);
        data.pipe(transformationStream).pipe(cssStream, {end: false});
    }
});

data.on('data', (chunk) => {

});

data.on('end', () => {
    jsStream.end();
    cssStream.end();
});

data.on('error', (err) => {
    console.log(`Error appears`);
})





  