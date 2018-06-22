const name = 'Nick';
function sayHello(){
    return 'Hello';
}

const obj = {
    name : 'alice',
    greeting : 'Hi'
}

console.log(`${sayHello()}. My name is: ${name}. I have ${1 + 2} daughters. ${obj[name]} say ${obj.greeting}`);