// Based on http server create your own 'express' with: Routing
const	{createServer} = require('http');

class	MiniExpress {
	constructor() {
		this.routes	=	[];
		this.methods	=	[];
		this.handlers	=	[];
		this.server	=	createServer();
		this.server.on( 'request', this.handler.bind( this ) );
	}

	static	miniExpress() {
		return	new MiniExpress();
	}

	listen( port, fn ) {
		this.server.listen( port ,'localhost', fn );
	}

	get( route, handler ) {
		this.methods.push( 'get' );
		this.handlers.push( handler );
		this.routes.push( route.toString().toLowerCase().trim() );
	}
	
	post( route, handler ) {
		this.methods.push( 'post' );
		this.handlers.push( handler );
		this.routes.push( route.toString().toLowerCase().trim() );
	}

	put( route, handler ) {
		this.methods.push( 'put' );
		this.handlers.push( handler );
		this.routes.push( route.toString().toLowerCase().trim() );
	}
	
	handler( req, res ) {
		let	handler	= null;		
		const	method	=	req.method.toLowerCase().trim() ,	
			route	=	req.url.toLowerCase().trim() ;
						
		for ( let i = 0 ; i < this.routes.length ; i += 1 ) {
			if ( !handler ) {
				if ( this.routes[i] === route && this.methods[i] === method ) {
					handler	= this.handlers[i];
				} 
			}
		} 
		for ( let i = 0 ; i < this.routes.lengh ; i += 1 ) {
			if ( !handler ) {
				if ( route.startsWith( this.routes[i]  && this.methods[i] === method ) ) {
					handler	= this.handlers[i];
				} 
			}
		}
		if ( handler ) {
			res.send = res.write;
			handler( req, res );
			res.end();
		} else {
			res.end( 'Access denied!' );	
		} 
	}
}

module.exports.miniExpress	=	MiniExpress.miniExpress;