module.exports = function factorial (n) {
    if(n < 0 ){
        throw new RangeError('Out of range');
    }

    if (n === 0) {
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
};
