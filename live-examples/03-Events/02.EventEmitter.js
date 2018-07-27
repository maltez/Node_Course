const { EventEmitter } = require('events');

const event = new EventEmitter();

event.on('TestRun', (name) => {
    console.log(`Test with name: ${name} is running`);
});

event.on('TestPassed', (name, longevity) => {
    console.log(`Test ${name} passed after ${longevity} ms`);
})

console.log(event.listenerCount('TestRun'));
event.setMaxListeners(11)

for(let i = 0; i < 9; i++) {
    event.on('TestRun', () => {
        console.log('---------------------');
    });
}

event.removeAllListeners('x');

setTimeout(()=> {
    const listeners = event.listeners('TestPassed');
    event.removeListener('TestPassed', listeners[0])
    event.on('TestRun', () => {
        console.log('---------------------');
    });
}, 500)

event.emit('TestRun', 'Super test');


setTimeout(() => {
    event.emit('TestPassed', 'test new', 200)
    event.emit('TestRun', 'Test1');
    event.emit('TestRun', 'Test2');
    event.emit('TestRun', 'Test3');
    event.emit('TestRun', 'Test4');
    event.emit('TestRun', 'Test5');
}, 2000)

// event.emit('TestRun', 'Test1');
// event.emit('TestRun', 'Test2');
// event.emit('TestRun', 'Test3');
// event.emit('TestRun', 'Test4');
// event.emit('TestRun', 'Test5');