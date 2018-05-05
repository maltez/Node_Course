// Based on http server create your own 'express' with: Routing 

const	{miniExpress} = require('./mini-express');
const	app = miniExpress();
const	port = 3000 ;

app.get( "/hello/", ( req, res ) => {
	res.send( 'With method "get" : Hello,World!');
});

app.post( "/hello/", ( req, res ) => {
	res.send( 'With method "post" : Hello,World!');
});

app.put( "/hello/", ( req, res ) => {
	res.send( 'With method "put" : Hello,World!');
});

app.get( "/",  ( req, res ) => {
	res.send( 'Access denied!' );
});

app.listen( port , () => { 
	console.log(`Server started on port ${port}...`); 
});