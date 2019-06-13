var module = require("./FileTransformer");

let trans = new module.transform('utf8');

trans.Work('TestText.txt');
