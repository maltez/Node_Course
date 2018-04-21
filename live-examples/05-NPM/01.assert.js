const assert = require('assert');

let a = { c: 'str', b: [1,2,3,4,5]};
let b = 12;


assert.equal(b, 12, 'Wrong variable value.');
assert.deepEqual(a, { c: 'str', b: [1,2,3,4,5]});
assert.throws(() => {
    //var v = k = 56;
    v = k;
})