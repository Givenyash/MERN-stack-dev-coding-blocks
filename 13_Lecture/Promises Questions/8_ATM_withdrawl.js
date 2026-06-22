function withdraw(balance, amount) {
    return new Promise((resolve, reject) => {
        if (balance >= amount)
            resolve("Withdrawal Successful");
        else
            reject("Insufficient Balance");
    });
}
withdraw(5000, 2000)
    .then(msg => console.log(msg))
    .catch(err => console.log(err)); 