const { Transform } = require("stream");
const fs = require(`fs`);

class Minify{
     constructor(pathTodirectory){
         this.path = pathTodirectory;

         if (!fs.existsSync(this.path +"/minified")){
             fs.mkdirSync(this.path +"/minified");


             this.trans =  new Transform({
             transform(chunk, encoding, cb){
                 let data = chunk.toString().replace(/[\s+\n]/g, "").trim();
                 this.push(data);
                 cb();
             }
         });
               }
     }


minify(){

    fs.readdir(this.path, (err, files) => {
        this.html = fs.createWriteStream(this.path + "/minified/minified.html");
        this.css = fs.createWriteStream(this.path + "/minified/minified.css");
        this.js = fs.createWriteStream(this.path + "/minified/minified.js");
        files.forEach(file => {
            if(file.endsWith(".html")){
                let readHtml = fs.createReadStream(this.path + "/" + file);
                readHtml.pipe(this.trans).pipe(this.html, {end : false});
                readHtml.on( "end", ()=>{
                    this.html.write("JoyCasinoClub");
                })
            };
            if(file.endsWith(".css")){
                let readCss = fs.createReadStream(this.path + "/" + file);
                readCss.pipe(this.trans).pipe(this.css, {end : false});
                readCss.on( "end", ()=>{
                    this.css.write("JoyCasinoClub");
                })
            };
            if(file.endsWith(".js")){
                let readJs = fs.createReadStream(this.path + "/" + file);
                readJs.pipe(this.trans).pipe(this.js, {end : false});
                readJs.on( "end", ()=>{
                    this.js.write("JoyCasinoClub");
                })};
        });
    });
}};

module.exports = Minify;

