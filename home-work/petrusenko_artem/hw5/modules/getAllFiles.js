
const getAllFiles = exports.getAllFiles = (dir, filelist) => {
    var path = path || require('path');
    var fs = fs || require('fs'),
        files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach((file) => {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            filelist = getAllFiles(path.join(dir, file), filelist);
        }
        else {
            filelist.push(path.join(dir, file));
        }
    });

    return filelist;
};