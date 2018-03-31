function multiply(a, b) {
  return new Promise((resolve, reject) => {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return reject(new Error('All parameters should be integers'));

    if (!Number.isSafeInteger(a) || !Number.isSafeInteger(b)) return reject(new Error('All parameters should be safe integer numbers'));

    const result = a * b;

    return resolve(result);
  });
}

function exponentiation(a, b) {
  return new Promise((resolve, reject) => {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return reject(new Error('All parameters should be integers'));

    if (!Number.isSafeInteger(a) || !Number.isSafeInteger(b)) return reject(new Error('All parameters should be safe integer numbers'));
    const result = a ** b;

    return resolve(result);
  });
}

Promise.all([
  multiply(2, 2),
  multiply(3, 2),
])
  .then(data => exponentiation(data[0], data[1])
    .then(() => exponentiation(data[0], data[1])))
  .then((data) => {
    console.log(data);
  })
  .catch(error => console.log(error.message));
