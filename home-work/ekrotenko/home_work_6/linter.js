const {readFileSync} = require('fs');
const config = require('./config');

(async function (config) {
    console.log('linter');
    const lines = readFileSync('test.txt', 'utf8').split('\n');
    const errorLines = [];
    const warningLines = [];

    lines.forEach((line, index) => {
        if (line.includes(config.warningMatch)) {
            warningLines.push(index + 1);
        }
        if (!line.endsWith(config.errorMatch)) {
            errorLines.push(index + 1);
        }
    });

    if (warningLines.length > 0) {
        await process.emitWarning(`'Fuck' is present in lines ${warningLines}`);
    }

    if (errorLines.length > 0) {
        console.error(`ERROR: Lines ${errorLines} should end with '.'`);
        process.exit(1);
    }

})(config);