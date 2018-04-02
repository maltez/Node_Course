
const sum = function(a, b) {
    return a + b;
}
  
  const sumProxy = new Proxy(sum, {
    apply: function(target, thisArg, argumentsList) {
        const args = [];
        for( let item of argumentsList ){
            args.push(item + 2);
        }
        
        console.log(`Calculate sum of: ${argumentsList}`);
        return target.apply(thisArg, args);
    }
  });
  
  console.log(sumProxy(1, 2));