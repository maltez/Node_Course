// Create singletone based on generator. Generator returns random n numbers. Numbers must be integers.

class	Singleton {

	constructor( n = 100 ) {

		const	gen = function * ( n ) {
			while ( n-- ) 
				yield	Math.floor( Math.random() * 100 ) ; 
		}
				
		if ( ! Singleton.prototype.sequence )
			Singleton.prototype.sequence = gen( n );			
	}

	get	random() {
		if ( Singleton.prototype.sequence )
			return	Singleton.prototype.sequence.next().value;
	}
}

let s1 = new Singleton( 6 );	
console.log( s1.random, s1.random, s1.random, s1.random ); // 80 11 52 47
let s2 = new Singleton();
console.log( s2.random, s2.random, s2.random, s2.random ); // 22 53 undefined undefined
