//----------------------------------------------------------//

function firstFunction() {
    return 'first';
}

function secondFunction() {
    return 'two';
}

let promiseFunction = function() {
    return new Promise(function(resove, reject) {
        let sumOfFunctions = function() {
            return firstFunction() + "," + secondFunction();
        }
        resove(sumOfFunctions); // resolved function
    })
};

promiseFunction().then((res) => {

    console.log(`Aggregate of results of functions : ${res()}`);
    return res; // return promise which resolved function

}).then((res) => {

    let data = res;
    let oldValueFunc = function(data, number) {
        let val = data(),
            separateVal = val.split(',');

        console.log(separateVal[number]);
        return data;
    }

    return oldValueFunc(data, 0); // return promise which resolved function
}).then((res) => {

    let data = res;
    let oldValueFunc = function(data, number) {
        let val = data(),
            separateVal = val.split(',');
        console.log(separateVal[number]);
        return data;
    }

    return oldValueFunc(data, 1); // return promise which resolved function

}).then((res) => console.log('Done!'));

//----------------------------------------------------------//