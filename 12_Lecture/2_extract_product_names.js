//Q.2 Extract Product Names

const products = [
    {id :1, name: "Laptop"},
    {id :2, name: "Phone"},
    {id :3, name: "Tablet"}
];

const names = products
   .map(product => product.name);

console.log(names);