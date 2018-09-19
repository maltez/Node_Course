const { createReadStream, createWriteStream } = require("fs");
const  { createGzip } = require("zlib");
const tar = require('tar-fs');
const fs = require('fs');




class Zipper{

    constructor(path){
        this.path = path;
        this.writeZip = createWriteStream(this.path + "/minified.tar.gz");
    }

    zip(){

        tar.pack(this.path + "/minified").pipe(createGzip()).pipe(this.writeZip);


    }
}





module.exports = Zipper;

