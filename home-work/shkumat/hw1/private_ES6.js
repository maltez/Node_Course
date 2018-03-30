// Реализация квази-приватных членов класса через символ в синтаксисе ES-6

class	BlackBox {

        constructor( initValue ) {
       		this.quasiPrivateMember		=	Symbol('quasiPrivateMember');
		this[ this.quasiPrivateMember ]	=	initValue;
        }

	get	value() {
		return	this[ this.quasiPrivateMember ] ;
        }

        set	value( value ) {
        	this[ this.quasiPrivateMember ] = value ;
        }
}

const	blackBox	= new	BlackBox( 10 );
console.log( blackBox.value );	// 10
blackBox.value = 20 ;	
console.log( blackBox.value );	// 20

