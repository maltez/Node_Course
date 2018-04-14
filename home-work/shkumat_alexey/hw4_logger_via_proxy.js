// Create class car. And create logger that will log all movings, coordinates and fuel level of this car

class	Car {
	constructor() {
		this.coordX	=	0	;
		this.coordY	=	0	;
		this.fuel	=	0	;
		this.consumption =	0	;
	}
}

const	CarLogger = {
	logger( coordX, coordY, fuel ) {
		console.log(`${(new Date()).toLocaleDateString()} ${(new Date()).toLocaleTimeString()}` +
			`, car coordinates = (${coordX}:${coordY}), fuel = ${fuel}`);
	} ,
	'ready': false ,
	set( target, prop, value ) {
		if ( prop == 'coordX' || prop == 'coordY' ) {
			target.fuel -= ( prop == 'coordX' ?  value - target.coordX  : value - target.coordY  ) * target.consumption / 100 ;
		} else	if ( prop == 'ready' ) {
			this.ready = value;
		}
		target[prop] = value ;
		if ( this.ready ) {
			this.logger( target.coordX, target.coordY , target.fuel );
		}
	} 
};

const	lanos	= new	Proxy(Car, CarLogger);

lanos.coordX	=	155;
lanos.coordY	=	199;
lanos.fuel	=	50;
lanos.consumption =	10;
lanos.ready	=	true;
setTimeout( () => {
		lanos.coordX	=	222;
		setTimeout( () => {
				lanos.coordY	=	222;
			} , 999 );
	} , 999 );
/*	
	2018-4-14 14:13:24, car coordinates = (155:199), fuel = 50
	2018-4-14 14:13:25, car coordinates = (222:199), fuel = 43.3
	2018-4-14 14:13:26, car coordinates = (222:222), fuel = 41
*/