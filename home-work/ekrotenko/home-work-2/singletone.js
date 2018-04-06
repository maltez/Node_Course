// create singleton based on generator. Generator returns random n numbers. Numbers must be integers


const singletonGenerator = function () {
    let returnedValues = new Set();

    const randomInt = function () {
        const min = Number.MIN_SAFE_INTEGER;
        const max = Number.MAX_SAFE_INTEGER;
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    };

    const singletonGen = function* () {
        yield randomInt();
    };

    return function () {
        const genInstance = singletonGen();
        let newValue = genInstance.next();

        while (returnedValues.has(newValue)) {
            newValue = genInstance.next();
        }

        returnedValues.add(newValue);

        return newValue.value;
    }
}();

for (let i = 0; i < 20; i++) {
    console.log(singletonGenerator());
}

