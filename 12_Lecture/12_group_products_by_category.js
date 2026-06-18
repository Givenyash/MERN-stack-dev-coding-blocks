//Q.12    group products by category

const products = [
    {name : "Laptop", category : "Electronics"},
    {name : "Phone", category : "Electronics"},
    {name : "Shirt", category : "Clothing"}
];

const groupProducts = products.reduce(function(group,product){
    if(!group[product.category]){
        group[product.category] = [];
    }
    group[product.category].push(product.name);
    return group
},{});

console.log(groupProducts);