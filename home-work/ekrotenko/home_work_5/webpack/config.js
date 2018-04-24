const {join} = require('path');

module.exports = {
    unpackedDir: join(__dirname, '../unpacked_files'),
    packedDir: join(__dirname, '../packed_files')
};
