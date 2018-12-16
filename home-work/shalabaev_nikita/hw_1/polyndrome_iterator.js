//Implement iterator protocol for returns polyndrome strings.

const polyndrome = (array) => {
  let index = 0;

  const isPolyndrome = (str) => {
    const string = str.toLowerCase();
    const reversedString = [...string].reverse().join('');

    return string === reversedString;
  }

  return {
    [Symbol.iterator]() {
      return {
        next() {
          const isDone = index === array.length;
          const currItem = array[index++];

          if (!isDone && !isPolyndrome(currItem)) {
            return this.next();
          }

          return {
            done: isDone,
            value: currItem
          }
        }
      }
    }
  }
}

const stringsMap = ['Test', 'Mom', 'Some text', 'mom', 'Qwerty', 'dad'];

for (let str of polyndrome(stringsMap)) {
  console.log(str);
}
