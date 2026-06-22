const api1 = Promise.resolve("User Data");
const api2 = Promise.resolve("Orders Data");
const api3 = Promise.resolve("Payment Data");
Promise.all([api1, api2, api3])
    .then(results => {
        console.log(results);
    });