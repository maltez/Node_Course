try {
    console.log(a);
    let a = 1;
} catch(err) {
    console.log(err.message);
}

try {
    setTimeout(() => {
        console.log(a);
        let a = 1;
    }, 1000)

} catch(err) {
    console.log(err.message);
}


