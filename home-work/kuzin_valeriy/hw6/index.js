const { readFile } = require('fs');

const nameFile = 'test_file.txt';

readFile(`${__dirname}/${nameFile}`, (err, data) => {

  // if in the end of line you will miss '.' it has to generate error
  let error_regexp = /(?<=[\w\d]+)[^\.]\n/g;
  let errors_data;
  while (errors_data = error_regexp.exec(data.toString())) {
    let index = errors_data.index;

    if (index) {
      let part = data.toString().substring(0, index);
      let line = part.match(/\n/);

      let errInfo = new SyntaxError(`line:${!line ? 1 : line.length + 1} - Error: end line must be with dot`)
      errInfo.name = 'DotError';

      process.emitWarning(errInfo);
    }
  }

  // if in the text present word f**ck it has to generate warning
  let warning_regexp = /f\w\wck/ig;
  let warning_data;
  while (warning_data = warning_regexp.exec(data.toString())) {
    let index = warning_data.index;

    if (index) {
      let part = data.toString().substring(0, index);
      let line = part.match(/\n/);

      process.emitWarning(`line:${!line ? 1 : line.length + 1} - Warning: text have incorrect word`)
    }
  }

});