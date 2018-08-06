const { equal, throws } = require('assert');
const { factorial } = require('../server/services/factorial.service');

test('Test factorial service. Input 4. Expect 24', () => {
    // Arrange
    const input = 4;
    const expectedResult = 24;

    // Act
    const actualResult = factorial(input);

    // Assert
    equal(actualResult, expectedResult, 'Invalid factorial result');
});

test('Test factorial service. Input 0. Expect 1', () => {
    // Arrange
    const input = 0;
    const expectedResult = 1;

    // Act
    const actualResult = factorial(input);

    // Assert
    equal(actualResult, expectedResult, 'Invalid factorial result');
});

test('Test factorial service. Input 1. Expect 1', () => {
    // Arrange
    const input = 1;
    const expectedResult = 1;

    // Act
    const actualResult = factorial(input);

    // Assert
    equal(actualResult, expectedResult, 'Invalid factorial result');
});

test('Test factorial service. Input -1. Expect Throw an error.', () => {
    const input = -1;
    throws(() => {
        factorial(input);
    }, 'Invalid argument range');
});
