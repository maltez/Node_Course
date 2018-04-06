const buf = new Buffer(26);
for (let i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97 // 97 is ASCII a
}

console.log(buf);
console.log(buf.toString('utf8'));// outputs: abcdefghijklmnopqrstuvwxyz
//console.log(buf.toString('ascii'))
console.log(buf.toString('ascii', 0, 5)); // outputs: abcde
console.log(buf.toString('utf8', 6, 16)); // outputs: abcde
console.log(buf.toString(undefined, 0, 7));