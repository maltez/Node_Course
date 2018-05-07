const { expect, assert:{ throws } } = require('chai');
const factorial = require('../factorial.service');

describe('Tets factorial method', () => {
    it('Input 6. Expect result 720', () => {
        const input = 6;
        const expexcted = 720;

        const actualResult = factorial(input);

        expect(actualResult).to.equal(expexcted);
    });

    it('Input 0. Expect result 1', () => {
        const input = 0;
        const expexcted = 1;

        const actualResult = factorial(input);

        expect(actualResult).to.equal(expexcted);
    });

    it('Input 1. Expect result 1', () => {
        const input = 1;
        const expexcted = 1;

        const actualResult = factorial(input);

        expect(actualResult).to.equal(expexcted);
    });

    it('Input -1. Expect result RangeError', () => {
        const input = -1;

        throws(()=> {
            factorial(input);
        }, 'Out of range');
    });
});