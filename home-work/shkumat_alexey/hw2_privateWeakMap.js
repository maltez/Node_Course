class	BlackBox  {
	constructor() {
		this.weakMap	= new	WeakMap();
		this.weakMap.set( this , Object.create( null ) );
	}
	getValue( key ) {
		return	this.weakMap.get( this )[key];
	}
	setValue( key , value ) {
		this.weakMap.get( this )[key] = value ;
	}
} 

let	blackBox	= new	BlackBox();
blackBox.setValue( "name" , "John Doe" );
blackBox.setValue( "age" , 129 ); 
console.log(`Hello! My name is ${blackBox.getValue("name")}. I am ${blackBox.getValue("age")} y.o.`  );
blackBox.setValue( "name" , "Mr.Bean" );
blackBox.setValue( "age" , "(unknown)" );
console.log(`Hello! My name is ${blackBox.getValue("name")}. I am ${blackBox.getValue("age")} y.o.`  );

//	Hello! My name is John Doe. I am 129 y.o.
//	Hello! My name is Mr.Bean. I am (unknown) y.o.