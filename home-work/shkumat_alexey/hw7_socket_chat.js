//	Create socket chat that using the room. 
//	Client 1 can push the message to client 2 and vice versa.
//	Client 3 can push the message to client 4 and vice versa.
//	All clients have all message history.
//	Put room message history in file before closing the chat.

const	server		=	require('net').createServer();
const	{writeFileSync}	=	require('fs');
const	logFileName	=	'chat.log';
const	sockets		=	[];
let	fullLog		=	'';

process.on('SIGINT', () => process.exit() );

process.on('SIGBREAK', () => process.exit() );

process.on('exit' , () => {
	try {
		writeFileSync( logFileName, fullLog , 'utf8' );
		console.log("Chat log is saved in  ", logFileName);			
	} catch	( err ) {
		console.log( 'Error writing ', logFileName , '\n', err.message );
	}	
});

server.on('connection', ( socket ) => {
	const	id	=	sockets.length;
	let	msg	=	'User #' + (id + 1).toString() + ' entered into the Room#' + ( ( id >> 1 ) + 1 ).toString();
	let	line	=	'';
	
	sockets.push( socket );
	fullLog		+=	msg + '\n'; 
	console.log( msg );

	socket.on('data', ( data ) => {
		line	+=	data.toString();
		if ( line.endsWith('\n')  || line.endsWith('\r') ) {
			msg	=	'User#' + ( id + 1 ).toString() + ' said ' + line;
			line	=	'';	
			fullLog	+=	msg; 
			if ( ( id ^ 1 ) < sockets.length ) { 
				sockets[id ^ 1].write( msg ,'utf8' );
			}
		}
	});

	socket.write('Hi, User#' + (id + 1).toString() + ' ! You are welcome to the Room#' + ( ( id >> 1 ) + 1 ).toString() + '\r\n' ,'utf8');
});

server.listen( 8000 , () => console.log("Chat-server started.\nRun  telnet localhost 8000  to enter the chat. Press Ctrl+C to quit.") );