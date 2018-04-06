const oneGenerator = (function() {
  let mein;

  function* generator(number) {
    for (let i = 1; i <= number ; i += 1) {
      yield Math.floor(Math.random() * number) ;
    }
      
  }
        
  return(number) => {
    if (!mein) {
      mein = [...generator(number)];
    }
    return mein;
  }
        
})();

const first  =  oneGenerator(10);
console.log(first); 

const second = oneGenerator(33);
console.log(second);