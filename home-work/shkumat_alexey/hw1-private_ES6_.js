// Квази-приватные(созданные с помощью символа) члены, к сожалению, доступны всем через [ ]

const	privateMethod	=	Symbol('privateMethod');

class	BaseClass {
	[privateMethod]() {
		return	'Private method is working...';
	}
}

class	ChildClass extends BaseClass {
	callPrivateMethod() {
		return this[ privateMethod ]();	// :(( 
	}
}

let	base	= new	BaseClass();
console.log( base[ privateMethod ]() );	// Private method is working...

let	child	= new	ChildClass();
console.log( child.callPrivateMethod() );// Private method is working...
console.log( child[ privateMethod ]() );// Private method is working...
					// :((