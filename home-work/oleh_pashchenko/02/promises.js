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

function devision(a, b) {
  return new Promise((resolve, reject) => {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return reject(new Error('All parameters should be integers'));

    if (!Number.isSafeInteger(a) || !Number.isSafeInteger(b)) return reject(new Error('All parameters should be safe integer numbers'));

    const result = a / b;

    return resolve(result);
  });
}

const promiseCatchCallback = function catchCallback(error) {
  console.log(error.message);
};

const promiseThenCallback = function thenCallback(data) {
  console.log(data);
};

// There are few solution options
// First option
Promise.all([
  exponentiation(2, 2),
  exponentiation(3, 2),
])
  .then((data) => {
    const updatedData = [data[0] * -1, data[1] * -1];
    const promisA = multiply(updatedData[0], updatedData[1]);
    const promisB = devision(updatedData[0], updatedData[1]);
    return {
      promisA,
      promisB,
    };
  })
  .then(promiseThenCallback)
  .catch(promiseCatchCallback);

// Second option
Promise.all([
  exponentiation(2, 2),
  exponentiation(3, 2),
])
  .then((data) => {
    const updatedData = [data[0] * -1, data[1] * -1];

    multiply(updatedData[0], updatedData[1])
      .then(promiseThenCallback)
      .catch(promiseCatchCallback);

    devision(updatedData[0], updatedData[1])
      .then(promiseThenCallback)
      .catch(promiseCatchCallback);
  })
  .catch(promiseCatchCallback);

// Third option
Promise.all([
  exponentiation(2, 2),
  exponentiation(3, 2),
])
  .then((data) => {
    const updatedData = [data[0] * -1, data[1] * -1];
    return multiply(updatedData[0], updatedData[1])
      .then(() => devision(updatedData[0], updatedData[1]));
  })
  .then(promiseThenCallback) // Do not use such styly in promise use (data)=> {}. Do not use callbacks
  .catch(promiseCatchCallback);// The same above
