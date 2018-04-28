// Based on http server create your own 'express' with: Routing , Body parser, Send json
const	{ createServer } = require('http');

class	MiniExpress {
	constructor() {
		this.routes	=	[];
		this.handlers	=	[];
		this.server	=	createServer();
		this.server.on( 'request', this.handler.bind( this ) );
	}
	static	miniExpress() {
		return	new MiniExpress();
	}
	listen( port, fn ){
		this.server.listen( port ,'localhost', fn );
	}
	get( route, handler ) {
		this.handlers.push( handler );
		this.routes.push( route.toString().toLowerCase().trim() );
	}
	use() {
	}
	handler( req, res ) {
		let	handler	;
		const	current	=	req.url.toLowerCase().trim();
		for( let i=0 ; i < this.routes.length ; i+=1 ) {
			if ( !handler ) {
				if ( this.routes[i] == current ) {
					handler	= this.handlers[i];
				} 
			}
		} 
		for( let i=0 ; i < this.routes.lengh ; i+=1 ) {
			if ( !handler ) {
				if ( current.startsWith( this.routes[i] ) ) {
					handler	= this.handlers[i];
				} 
			}
		}
		if ( handler ) {
			handler( req, res )
		} else {
			res.end( 'Access denied!' );	
		} 
	}
}

const	bodyParser = {
	text() {
		return	function( req , res , next ) {
			res.send( "Text perser is working..." );
			next();
		}
	} 
}

module.exports.miniExpress	=	MiniExpress.miniExpress;
module.exports.bodyParser	=	bodyParser;
