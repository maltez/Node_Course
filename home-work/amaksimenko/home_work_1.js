// Create private member in class using
// Symbol primitive. Implement iterator
// protocol for returns polyndrome strings.

class Iterator {
  constructor(array) {
    this.array = array
  }

  [Symbol.iterator]() {
    let index = 0

    return {
      next: () => {
        if (index < this.array.length) {
          const currentItem = this.array[index]

          index++

          if (
            typeof currentItem === 'string'
            && currentItem.length > 1
            && currentItem === currentItem.split('').reverse().join('')
          ) {
            return {
              done:  false,
              value: currentItem,
            }
          }

          return {
            done:  false,
          }
        }

        return {
          done: true,
        }
      },
    }
  }
}

const array = [1, '2', 'magiccigam', 'four', 'asddsa']
const iterator = new Iterator(array)

for (let item of iterator) {
  if (item) console.log(item)
}
