setTimeout(() => {
    console.log('Im first');
}, 3);

setImmediate(()=> {
    console.log('Im setImmidiate');
});

process.nextTick(()=> {
    console.log('Im second');
});

for(let i = 0; i < 35000; i++) {
    console.log(i)
}