//Private method

let isAdmin = Symbol("isAdmin");

class Name {
    constructor(name){
        this.name = name;
    }

    getName() {
        return this.name
    }

    [isAdmin] () {
        return true
    }
}

let user = new Name('Nata');
user.getName();
user[isAdmin]();


//Iterator

let arr = ['aabbaa', 'avbdg', 'abs', 'bdb', 'ddffdd'];

function polyndrome(arr){
	let isPolyndrome = (str) => {
		return str && str === str.split('').reverse().join('')
	}

    return {
        [Symbol.iterator]() {
            let i = 0;
            return{
                next(){
                	if(i <= arr.length) {
                		return isPolyndrome(arr[i]) ? { value: arr[i++], done: false} : this.next(i++);	
                	} else {
                		return { value : undefined, done: true} 
                    }               
                }
            }
        }
    }
}

for(let k of polyndrome(arr)){
    console.log(k);
}