// Получение факториалов с помощью функции-генератора
// https://ru.wikipedia.org/wiki/Факториал

const	factorial =	function * (n) {
	if	( n < 1 )
		return; 
	let	current	=	1 ; 
	for( let i=0 ; i < n ; i+=1 ) { 
		yield	current; 
		current  = current * ( i + 1 ); 
	} 
}

for( let item of factorial(7) )
	console.log( item );	//  1  1  2  6  24  120  720