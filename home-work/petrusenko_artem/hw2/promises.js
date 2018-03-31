
function generateFirstName(firstName) {
    return firstName;
}

function generateSecondName(secondName) {
    return secondName;
}

function firstSequentialFunction(val) {
    let res = [];
    res.push(val + 'A')
    return res;
}

function secondSequentialFunction(val) {

    val.push(val[0] + 'B');

    return val;
}

function concat(result) {
    return result.join(' ');
}

Promise.all(
    [
        generateFirstName('Artem'), // Artem
        generateSecondName('Petrusenko') // Petrusenko
    ]
).then(
    (result) => concat(result) // Artem Petrusenko
)
.then(
    (result) => firstSequentialFunction(result) // [ 'Artem PetrusenkoA']
)
.then(
    (result) => secondSequentialFunction(result) // [ 'Artem PetrusenkoA', 'Artem PetrusenkoAB' ]
)
.then(
    (result) => console.log(result) // [ 'Artem PetrusenkoA', 'Artem PetrusenkoAB' ]
).catch(
    (error) => console.error(error)
);