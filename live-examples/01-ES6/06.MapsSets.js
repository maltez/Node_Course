let obj = {};
const symbol = Symbol('nick');
const map = new Map([[1,'Z'], [obj, 'kk']]);
const weakMap = new WeakMap([[{}, 1], [{}, 2], [obj, 3]]);
console.log(weakMap.get(obj));
obj = {};
console.log(weakMap.get(obj));

console.log(map.get(1));
map.set(symbol, 123);
console.log(map.get(symbol));
console.log(map.size);
for(let k of map) {
    console.log(k);
}
map.clear();


// Sets

const setExample = new Set([1,2,3,4,5,5,5,5,5]);
const notDuplicatedItems = Array.from(setExample);
console.log(notDuplicatedItems);
for(let item of setExample) {
    console.log(item);
} 


