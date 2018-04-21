let counter = 1;

const int = setInterval(() => {
    counter ++;
    console.log(counter);
    if(counter > 60) {
        clearInterval(int);
    }
}, 1000);