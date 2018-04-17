// My function for minimization of javascript-code. 
// Note : it processes comments like // , but doesn't process comments like /* */ .
 
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
			// console.log('replace : ' , match,  '-' , offset, '-' ,string);
			return origin[offset];
		});
	} 
	while	( result.match( /\s\W/ ) ) {
		result = result.replace( /\s\W/ , (match, offset, origin) => {
			// console.log('replace : ' , match,  '-' , offset, '-' ,string);
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
	console.log( 'debug : ', result );
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

console.log( 'result: ',minimize( 'let i = 1 ;   console.log( " i = " ,  i ) ;  // comment' ) );
console.log( 'result: ',minimize( 'setTimeout( ()=> { alert(" Hello, world ") } ,1111) ; function alert( msg ) { console.log(msg); }'));