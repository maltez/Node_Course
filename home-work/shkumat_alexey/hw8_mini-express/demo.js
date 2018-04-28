// Based on http server create your own 'express' with: Routing , Body parser, Send json
const	{ miniExpress , bodyParser } = require('./mini-express');

const	app = miniExpress();
const	port = 3000 ;

app.use( bodyParser.text( { type: 'text/html' } ) );
app.get( "/hello/", ( req, res ) => {
	res.end( 'Hello,World!' );
});
app.get( "/",  ( req, res ) => {
	res.end( 'Access denied!' );
});
app.listen( port , () => { 
	console.log(`Server started on port ${port}...`); 
});