// Create proxy object that will be validate User class input. 
// Age - is integer, in range 0 - 100. 
// Name is the string. Min length 3 max length 50. 
// Proxy should add full name field that would be concatination of First and last name.

class	User {
	constructor() {
		this.age	=	0;		
		this.lastName	=	'';
		this.firstName	=	'';
	}
};

const	UserValidator = {
	get( target, prop ) {
		if	( prop == 'fullName' )
			return target['firstName'] + ' ' + target['lastName'];
		else
			return target[prop];
	} 
	,	
	set( target, prop, value) {		
		switch	( prop ) {
			case 'age': {
			 	if ( ! Number.isInteger( value ) || value < 0 || value > 100 ) {
					target[prop] = 0;
					throw	new Error('Age "' + value + '" is incorrect!');
			 	}
				break;
			}
			case 'lastName': 	
			case 'firstName': {	
			 	if ( ( typeof value != 'string' )  || value.length < 3 || value.length > 50 ) {
					target[prop] = '';
					throw	new Error('Name "' + value + '" is incorrect!');
			 	}
				break;
			}
		}
		target[prop] = value;
		return true;
	}
};

let	user	= new	Proxy( User, UserValidator );

try {	user.age=29; user.firstName='John'; user.lastName='Doe';
	console.log( `Hello! My name is ${user.fullName}. I am ${user.age}.` );
				//  Hello! My name is John Doe. I am 29.	
} catch( er ) {			
	console.log( er ); 
};

try {	user.age=39; user.firstName='Chang'; user.lastName='Li';
	console.log( `Hello! My name is ${user.fullName}. I am ${user.age}.` );	
} catch( er ) {
	console.log(er.message);//  Error: Name "Li" is incorrect! 
};

try {	user.age=102; user.firstName='Kazbek'; user.lastName='Axakalov';
	console.log( `Hello! My name is ${user.fullName}. I am ${user.age}.` );	
} catch( er ) {			
	console.log(er.message);//  Error: Age "102" is incorrect!
};