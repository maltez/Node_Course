const {createReadStream, createWriteStream, readdirSync, statSync, existsSync, mkdirSync} = require('fs');
const {Transform} = require('stream');
const {join} = require('path');
const config = require('./config');

const webpack = function(config){
    class Webpack{
        constructor(config){
            this.packedDir = config.packedDir;
            this.unpackedDir = config.unpackedDir;
        }

        __getFileNamesFromDir(dirName, files = []) {
            readdirSync(dirName).forEach(item => {
                const fileName = join(dirName, item);
                if (statSync(fileName).isFile()) {
                    files.push(fileName);
                }
                else this.__getFileNamesFromDir(join(dirName, item), files);
            });

            return files;
        };

        __minify(string) {
            return string
                .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '')
                .replace(/^\s+/gm, '')
                .replace(/\s/gm, ' ')
        };

        __bundleFile(originalStream, copyStream, minifyFn = this.__minify) {
            const transform = new Transform({
                transform(chunk, encoding, cb) {
                    this.push(minifyFn(chunk.toString()));
                    return cb(); // Guarantied end of callback;
                }
            });
            originalStream.pipe(transform).pipe(copyStream);
        };


        __createCSSBundle(cssFiles) {
            const cssDir = join(this.packedDir, 'css');
            if (!existsSync(cssDir)) {
                mkdirSync(cssDir);
            }
            const fileOutputName = join(cssDir, 'cssBundle.css');
            const copyStream = createWriteStream(fileOutputName);

            cssFiles.forEach(file => {
                const originalStream = createReadStream(file);
                this.__bundleFile(originalStream, copyStream);
            });
        };

        __overwriteHtml(htmlFiles) {
            htmlFiles.forEach(file => {
                const fileOutputName = file.replace(this.unpackedDir, this.packedDir);
                const originalStream = createReadStream(file);
                const copyStream = createWriteStream(fileOutputName);
                this.__bundleFile(originalStream, copyStream, (string) => {
                    return string.replace(/^.*\b(link|script)\b.*$/gm, '')
                        .replace('<head>', `<head>
<link href="css/cssBundle.css" rel="stylesheet" type="text/css" />
<script src="js/jsBundle.js" type="text/javascript"></script>`)
                });
                originalStream.on('end', () => {
                    copyStream.write('\r\nJoyCasino.com');
                });
            });
        };

        __createJSBundle(jsFiles) {
            const jsDir = join(this.packedDir, 'js');
            if (!existsSync(jsDir)) {
                mkdirSync(jsDir);
            }

            const fileOutputName = join(jsDir, 'jsBundle.js');

            jsFiles.forEach(file => {
                const originalStream = createReadStream(file);
                const copyStream = createWriteStream(fileOutputName);
                this.__bundleFile(originalStream, copyStream);
                originalStream.on('start',()=>{
                    copyStream.write(' (function(){');
                });
                originalStream.on('end', () => {
                    copyStream.write('\r\nJoyCasino.com');
                });
            })
        };

        pack() {
            const files = this.__getFileNamesFromDir(this.unpackedDir);
            const cssFiles = files.filter(file => file.endsWith('.css'));
            const htmlFiles = files.filter(file => file.endsWith('.html'));
            const jsFiles = files.filter(file => file.endsWith('.js'));

            this.__createCSSBundle(cssFiles);
            this.__createJSBundle(jsFiles);
            this.__overwriteHtml(htmlFiles);
        };
    }

    return new Webpack(config);
};

webpack(config).pack();

