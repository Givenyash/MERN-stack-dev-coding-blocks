function checkEven(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0)
            resolve("Even Number");
        else
            reject("Odd Number");
    });
}
checkEven(8)
    .then(msg => console.log(msg))
    .catch(err => console.log(err)); 