const {readdir, mkdir, unlink} = require('fs');
const {join} = require('path');

const ensureDestDir = (dir, cb = function(){}) => {
  return new Promise((res, rej) => {
    readdir(dir, (err) => {
      if (err && err.code === 'ENOENT') {
        mkdir(join(__dirname, dir), (err) => {
          if (err) {
            rej(err);
            return cb(err, null);
          }
          res(dir);
          return cb(null, dir);
        });
      }
      res(dir);
    });
  })
};

const deleteFile = (file, cb = function(){}) => new Promise((res, rej) => {
  unlink(file, (err) => {
    if (err) {
      rej(err);
      return cb(err, null);
    }
    res(true);
    cb(null, true);
  });
});

const getFilesWithinFolder = (dir, cb = function(){}) => {
  return new Promise((res, rej) => {
    readdir(dir, function (err, files) {
      if (err) {
        rej(err);
        return cb(err, null);
      }
      files = files.map(file => join(dir, file));
      res(files);
      return cb(null, files);
    });
  });
};

const clearComments = {
  '.html': text => text.replace(/<!--.+?-->/g, ''),
  '.js': text => text.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, ''),
  '.css': text => text.replace(/\/\*.*?\*\//g, '')
};

module.exports = {ensureDestDir, deleteFile, getFilesWithinFolder, clearComments};
