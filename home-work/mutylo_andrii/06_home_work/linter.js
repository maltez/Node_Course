const	fs =	require('fs');
const	task	=	process.argv[1];
const	inputFile	=	process.argv[2];

const fuck = 'fuck';
const endLine = ';'
const lineEnd = '.';

let lines = 0;
const	lintString =	function(line) {
  console.log('line', line)
	lines++;
	if (line.trim().length === 0) {
		return;
	}
	if (line.match(fuck)) {
		console.log( inputFile + '(' + lines.toString().trim() + ' Warning : Fuck word is found! ' );
	}  			
}

const doEndLine = function (line) {
  console.log('end line', line)
  if (!line.trim().endsWith(lineEnd)) {
		console.log( inputFile + '(' + lines.toString().trim() + ') Error : Line terminator ("' + lineEnd + '") not found! ' );
	}  
}

const doChunk = function (chunk) {
  let chunkString = chunk.toString().split('\n');
  let	chunkLength	=	chunkString.length;
	chunkString.forEach((line) => {
    console.log('curLine: ', ' "' + line + '" ')
		if (--chunkLength) {
      lintString(line);
		}
	});
}

if (inputFile && fs.existsSync(inputFile )) { 
  console.log('inputfile', inputFile)
	  const	data = fs.createReadStream(inputFile);
	  data.on('data' , (chunk) => {
      // console.log('chunk', chunk)
		  // doChunk(chunk);
	  });
	  data.on('end', (chunk) => {
        doChunk(chunk);
			  doEndLine(chunk);
	  });
}
