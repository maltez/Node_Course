const Palindrome = (function () {
	class Palindrome {
  	constructor(str) {
 			const _reg = Symbol('Regexp');
      this._reg = /[\W_]/g;
      this.str = [];
      this.reverseArr = [];
  	}
    isPalindrome(str) {
    	this.str = [...str.toLowerCase().replace(this._reg, '')];
      let symbolIterator = this.str[Symbol.iterator]();
      let next = false;
      let iteration = this.str.length;
      if (this.str.length > 0) {
        while (!next.done) {
          next = symbolIterator.next();
          iteration--;
          if (next.value != this.str[iteration]) {
            return false;
            break;
          }
        }
        return true;
      }
      return false;
    }
	}
  return Palindrome;
})();
let dd = new Palindrome();
console.log(dd.isPalindrome('RaceCar'));
console.log(dd.isPalindrome('Madam , i`m not Adam '));
console.log(dd.isPalindrome('Madam , i`m Adam'));

