/*
  Create promise chain. First should run in parallel two functions.
  Their results should aggregate (concatenate in one string) and you have
  to run to functions with these aggregate results one by one. As result
  You have to returns separate results of last two functions.
*/

function getData(text) {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(text);
    }, (Math.random() * (5000 - 1000) + 1000));
  })
}

const promiseOne = getData('promiseOne');
const promiseTwo = getData('promiseTwo');

const processData = (data) => {
  const temp = `${data}+`;
  console.log(temp);
  return temp;
}

Promise.all([promiseOne, promiseTwo])
  .then((data) => {
    return data.join(' ');
  })
  .then(processData)
  .then(processData);