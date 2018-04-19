const	fib	=	function * (n) {
	if	( n < 1 )
		return; 
	let	current	=	0 
	,	next	=	1; 
	while	( n-- ) { 
		yield	current; 
		[ current, next ] = [ next, current + next ]; 
	} 
}

for( let item of fib(8) )
	console.log( item );	//  0  1  1  2  3  5  8  13	  
 