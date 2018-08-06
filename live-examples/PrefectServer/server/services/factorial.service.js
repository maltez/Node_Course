function factorial(input) {
    if (input < 0) {
        throw new RangeError('Out of range');
    }

    return input === 0 ? 1 : factorial(input - 1) * input;
}

function asyncFactorial(input, fn) {
    if (typeof input !== 'number' || input < 0) {
        fn(new Error('Invalid argument'));
    } else {
        setImmediate(() => {
            fn(null, factorial(input));
        });
    }
}

module.exports = {
    factorial,
    asyncFactorial,
};
