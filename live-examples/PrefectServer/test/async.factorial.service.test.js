const { equal, ifError } = require('assert');
const { asyncFactorial } = require('../server/services/factorial.service');

xdescribe('Test async factorial service functionality', () => {
    let cb;
    beforeEach((expectedResult, done) => {
        cb = (err, actualRes) => () => {
            equal(actualRes, expectedResult, 'Invalid calculation');
            done();
        };
    });

    it('Input 0. Expected 1', (done) => {
        const input = 0;
        const expectedResult = 1;

        asyncFactorial(input, cb(expectedResult, done));
    });

    it('Input 1. Expected 1', (done) => {
        const input = 1;
        const expectedResult = 1;

        asyncFactorial(input, cb(expectedResult, done));
    });

    it('Input 4. Expected 24', (done) => {
        const input = 4;
        const expectedResult = 24;

        asyncFactorial(input, cb(expectedResult, done));
    });

    it('Input str. Expected an Error', () => {

    });

    it('Input -1. Expexted an error', () => {

    });
});
