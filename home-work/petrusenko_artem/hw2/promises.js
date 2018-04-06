
function generateFirstName(firstName) {
    return firstName;
}

function generateSecondName(secondName) {
    return secondName;
}

function firstSequentialFunction(val) {
    return val + 'A';
}

function secondSequentialFunction(val) {
    return val + 'B';
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
    (result) => secondSequentialFunction(result) // Artem PetrusenkoAB
)
.then(
    (result) => console.log(result) // Artem PetrusenkoAB
).catch(
    (error) => console.error(error)
);