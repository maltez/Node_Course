// Реализация приватных членов класса через замыкание в синтаксисе ES-5

function BlackBox( init ) {

	function	getClosure() {
		var	value	= null ;
		return	function( newValue ) {
			return	( value	=  newValue || value ) ; 
		}	
	}	

	this.value	= getClosure ();
	this.value( init );	
}

BlackBox.prototype.get = function() {
	return	this.value();
}

BlackBox.prototype.set = function( newValue ) {
	this.value( newValue );
}

var	blackBox	= new	BlackBox( 10 )
console.log( blackBox.get() );	// 10
blackBox.set(20) ;
console.log( blackBox.get() );	// 20
