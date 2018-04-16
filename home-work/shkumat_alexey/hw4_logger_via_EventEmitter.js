// Create class car. And create logger that will log all movings, coordinates and fuel level of this car

const { EventEmitter } = require('events');

class	Car {
	constructor( consumption ) {
		this.coordX	=	0	;
		this.coordY	=	0	;
		this.fuel	=	0	;
		this.consumption =	consumption ;
	}
	startAt( coordX, coordY, fuel ) {
		this.coordX	=	coordX	;
		this.coordY	=	coordY	;
		this.fuel	=	fuel	;	
	}
	moveTo( coordX, coordY ) {
		this.fuel	-=	Math.sqrt( Math.pow( coordX - this.coordX , 2 ) + Math.pow( coordX - this.coordX , 2 ) )  * this.consumption / 100 ;
		this.coordX	=	coordX	;
		this.coordY	=	coordY	;	
	}
}

class	CarWithLogging	extends	Car {
	constructor( consumption ) {
		super( consumption );
		this.event	= new	EventEmitter();
		this.event.on( 'logging', () => {
			console.log(`${(new Date()).toLocaleDateString()} ${(new Date()).toLocaleTimeString()}` +
				`, car coordinates = (${this.coordX}:${this.coordY}), fuel = ${this.fuel}`);
		});
	}
	startAt( coordX, coordY, fuel ) {
		super.startAt( coordX, coordY, fuel );
		this.event.emit('logging');
	}
	moveTo( coordX, coordY ) {
		super.moveTo( coordX, coordY );
		this.event.emit('logging');
	}
}

const	lanos	= new	CarWithLogging( 10 );

lanos.startAt( 155, 199, 50 );
setTimeout( () => {
		lanos.moveTo( 166, 211 );
		setTimeout( () => {
				lanos.moveTo( 177, 222 );
			} , 999 );
	} , 999 );
/*	
	2018-4-16 10:49:30, car coordinates = (155:199), fuel = 50
	2018-4-16 10:49:31, car coordinates = (166:211), fuel = 48.4443650813896
	2018-4-16 10:49:32, car coordinates = (177:222), fuel = 46.8887301627792
*/