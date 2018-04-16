const	step1Parallel = function( resolve, reject ) {
	setTimeout( ()=> {
			return	resolve( "1-st step returns A" );		
		}
	,	100 
	);	
}
,	step2Parallel = function( resolve, reject ) {
	setTimeout( ()=> {
			return	resolve( "2-nd step returns B" );		
		}
	,	500 
	);	
}
,	step3Serial = function( data ) {
	return	[ ...data , "3-rd step returns C" ];
}
,	step4Serial = function( data ) {
	return	[ ...data , "4-th step returns D" ];
}

Promise.all([
	new Promise( step1Parallel )
, 	new Promise( step2Parallel )
]).then( (data) => {
	return	new Promise( ( resolve, reject ) => {
			resolve( step4Serial ( step3Serial ( data ) ) ); 
		});
}).then( (data) => {
	console.log( data.splice( data.length - 2 , 2 ) )
})