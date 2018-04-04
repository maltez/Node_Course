function* generatorFibonachi(number) {
  let first = 1,
      second = 0;

  for (let i = 1; i <= number ; i += 1) {
    therd = first + second;
    first = second;
    second = therd;
    yield i === 1 ? 1 : second ;
  }

}

function rangeFibodathi(number) {
  if (number < 0) {
    return [];
  } else if (number === 0) {
    return [0];
  } else {
    let range = [...generatorFibonachi(number)];
    range.unshift(0);
    return range;
  }
}

console.log(rangeFibodathi(-3)); // []
console.log(rangeFibodathi (0)); // [0]
console.log(rangeFibodathi (1)); // [0, 1]
console.log(rangeFibodathi (10)); // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
