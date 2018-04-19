//  Create your own webpack with following abilities: - Minify js, css, html files
 
const	fs		=	require('fs');
const	path		=	require('path');
const	fileExists	=	fs.existsSync;
const	getDirName	=	path.dirname;
const	getFileExt	=	path.extname;
const	getFileName	= 	path.basename;
const	getFileContent	=	fs.readFileSync;
const	getTaskName	=	() => process.argv[1];
const	getShortName	= 	( str ) => path.basename( str, getFileExt( str ) );
const	configFileName	=	getDirName( getTaskName() ) + path.sep + getShortName( getTaskName() ) + '.cfg';

const	replace =  function( str , fromStr , toStr ) {
        if      ( !str ) {
		return	'';
        }
	let	result = str.toString();

	while   ( result.indexOf( fromStr ) > -1 ) {
		result = result.replace( fromStr , toStr );
	}
	return  result;
}

const	removeExtraSpaces = function( str ) {
	if	( typeof str !== 'string') {
		return	'';
	}
	let	result	=	str.trim();
	while	( result.match( /\W\s/ ) ) {
		result = result.replace( /\W\s/ , (match, offset, origin) => {
			return origin[offset];
		});
	}
	while	( result.match( /\s\W/ ) ) {
		result = result.replace( /\s\W/ , (match, offset, origin) => {
			return origin[offset + 1];
		});
	}
	return	result;
}

const	getMinValue = function() {
	let	result	= -1;
	for	( let key in arguments ) {
		result	= ( result < 0 ) ? arguments[key] : ( arguments[key] < 0 ? result : Math.min( result , arguments[key] ) );
	}
	return	result;
}

const	minimize = function( str ) {
	if	( typeof str !== 'string') {
		return	'';
	}
	let	result	= str.trim();

	if	( !result.length ) {
		return	'';
	}
	const	cPos = result.indexOf( '//' ) ;

	if	( cPos == 0 ) {
		return	'';
	}
	const	qPos = getMinValue( result.indexOf( '"') , result.indexOf( "'" ) , result.indexOf( '`' ) );

	if	( cPos > 0 && ( cPos < qPos || qPos < 0 ) ) {
		return	minimize( result.substr(0,cPos - 1) );
	}
	if	( qPos > 0 ) {
		const	quote = result[qPos];
		const	qEnd = result.indexOf( quote , qPos + 1 );

		if	( qEnd < qPos ) {
			return	result;
		}

		return	minimize( result.substr( 0 , qPos ) ) + result.substr( qPos , qEnd - qPos + 1 ) + minimize( result.substr( qEnd + 1 ) ) ;
	}
	result	= replace( replace( result, '\r', '' ) , '\n', '');
	result	= replace( replace( result, '\t', ' ' ) , '  ',' ');

	return	removeExtraSpaces( result );
}

const	processFile	=	function( fileName ) {
	let	sourceFileName	=	getDirName( path.normalize( fileName ) );

	if ( sourceFileName = '.' ) {
		sourceFileName = getDirName( getTaskName() ) ;
	}
	sourceFileName	=	sourceFileName + path.sep + path.normalize( fileName ) ;
	if	( !fileExists( sourceFileName ) ) {
		console.log( '\tError : source file ' , sourceFileName + ' not found!' );
		return;
	}
	console.log( '\tProcess source file ', sourceFileName , ' ...' ) ;
	const	ext		=	getFileExt( sourceFileName ).toLowerCase();
	const	targetFileName	=	sourceFileName.substr( 0 , sourceFileName.lastIndexOf( '.' ) ) + '.min' + getFileExt( sourceFileName );
	const	targetFile	=	fs.createWriteStream(targetFileName);
	let	target		=	'';

	getFileContent( sourceFileName, 'utf8' ).split('\n').forEach( ( line ) => {
		let	str = line.replace('\r','').trim();
		if ( ext == '.js' || ext == '.css' ) {
			str = minimize( str );
			if	( str.length ) {
				const	ch	= str[ str.length - 1 ];
				if	( ch == '}' || ch.match( '\w' ) ) {
					str += ';';
				}
			}
		}
		target	+=	str;
	});
	switch	( ext ) {
		case '.js': {
			target = target.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*\//g, '');
			target = target.replace('};}','}}');	
			break; 
		}
		case '.css': {
			target = target.replace(/\/\*.*?\*\//g, '');	
			break; 
		}
		case '.html': {
			target = target.replace(/<!--.+?-->/g, '');	
			break; 
		}
	}
	targetFile.write( target );
	targetFile.end();
	console.log( '\t\tTarget file ' , targetFileName , ' is done.') ;
}

if	( !fileExists( configFileName ) ) {
	console.log( 'Error : config file ' , configFileName + ' not found!' );
} else {
	console.log( 'Use config file ' , configFileName );
	getFileContent( configFileName, 'utf8' ).split('\n').forEach( ( fileName ) => {
		if ( fileName.trim() !='' ) {
			processFile( fileName.trim() );
		}
	});
}