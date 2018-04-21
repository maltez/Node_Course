// Create your own linter.
// if in the end of line you will miss '.' it has to generate error.
// If in the text present word f**ck it has to generate warning.

const	forbiddenWord	=	/fuck/i ;
const	terminator	=	'.';
const	fs		=	require('fs');
const	path		=	require('path');
const	fileExists	=	fs.existsSync;
const	getFileName	= 	path.basename;
const	taskName	=	process.argv[1];
const	inputFileName	=	process.argv[2];
let	carryOver	=	'',
	lineCounter	=	0 ;

const	processLine	=	function( line ) {
	lineCounter++;
	if ( !line.trim().length ) {
		return;
	}
	if ( line.match( forbiddenWord ) ) {
		console.log( inputFileName + '(' + lineCounter.toString().trim() + ') Warning : Forbidden word is found! ' );
	}  	
	if ( !line.trim().endsWith( terminator ) ) {
		console.log( inputFileName + '(' + lineCounter.toString().trim() + ') Error : Line terminator ("' + terminator + '") not found! ' );
	}  	
}

const	processChunk	=	function( chunk ) {
	let	count	=	chunk.toString().split('\n').length;
	chunk.toString().split('\n').forEach( ( line ) => {
		if ( --count ) {
			processLine( carryOver.concat( line ) );
			carryOver	=	'';
		} else {
			carryOver	=	line;
		}
	});
} 

if ( !inputFileName ) {
	console.log( "Usage:\tnode ", getFileName( taskName ), " <Input_File>" );
} else	if ( !fileExists( inputFileName ) )  {
	console.log( "Error: file ", inputFileName, " not found!" );
} else {
	const	data = fs.createReadStream( inputFileName );
	data.on( 'data' , ( chunk ) => {
		processChunk( chunk );
	});
	data.on( 'close' , () => {
		if ( carryOver.length ) {
			processLine( carryOver );
		}
	});
}