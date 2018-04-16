// Create you own event emitter. It should predefine listeners for 3 events. Listen, start and stop. 
// Shold have ability extend max listeners count via setter and remove listener by name.

const { EventEmitter } = require('events');

class	MyEventEmitter extends EventEmitter {
	constructor() {
		super();
		super.on( 'start' , this.onStart );
		super.on( 'listen', this.onListen );
		super.on( 'stop'  , this.onStop );
	}
	onStart() {
		console.log('Started!');
	}
	onListen() {
		console.log('Linstned!');
	}
	onStop() {
		console.log('Stopped!');
	}
	start() {
		super.emit('start');
	}
	listen() {
		super.emit('listen');
	}
	stop() {
		super.emit('stop');
	}
	set	maxListeners( value ) {
		super.setMaxListeners( value );
	}
	removeListener( eventName, eventHandler ) {		
		if ( typeof eventHandler == 'string' ) {
			eventHandler = eventHandler.trim();
			super.listeners( eventName ).forEach( item => {
				if ( item.name == eventHandler ) {
					super.removeListener( eventName, item );					
				} 
			});
		} else	if ( typeof eventHandler == 'function' ) {
			super.removeListener( eventHandler );
		}
	}
}

const	namedLogger	=	function () {
	console.log('Logged!');
}

const	myEventEmitter	= new	MyEventEmitter(),
	eventName	=	'request'	;

myEventEmitter.maxListeners = 25 ;
myEventEmitter.start();						//  Started!
console.log( myEventEmitter.listenerCount( eventName ) );	//  0
myEventEmitter.on( eventName, namedLogger );
console.log( myEventEmitter.listenerCount( eventName ) );	//  1
myEventEmitter.emit( eventName );				//  Logged!
myEventEmitter.removeListener( eventName, 'namedLogger' );
console.log( myEventEmitter.listenerCount( eventName ) );	//  0
myEventEmitter.stop();						//  Stopped!
