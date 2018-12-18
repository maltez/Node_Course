// Implement iterator protocol for returns polyndrome strings.

const testArray = ['arozaupalanalapuazora', 'fvdf', 'qwerty', 'mom', 'dsfscds', 'asdsa']

const isPalindrome = (str) => {
    return str === str.split('').reverse().join('')
}

const returnPolyndromes = {
    data: testArray
}

returnPolyndromes[Symbol.iterator] = function () {
    const data = this.data;
    let currentIndex = 0;
    return {
        next() {
            if (currentIndex < data.length) {
              while(!isPalindrome(data[currentIndex])){
                currentIndex += 1;
            }
            return {
              done: false,
              value: data[currentIndex++]
            }

            } else {
              return {
                done: true
              }
            }
        }
    }
}


for (let item of returnPolyndromes) {
    console.log(item)
}

// ===========

const iter = returnPolyndromes[Symbol.iterator]()

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
