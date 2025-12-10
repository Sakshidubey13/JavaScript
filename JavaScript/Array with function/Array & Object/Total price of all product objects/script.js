// Create a function that takes an array of product objects and returns total price.

function getTotalPrice(product){
    let total = 0;

    for(let i = 0; i < product.length;i++){
        total += product[i].price;

    }
    return total;

}

const product = [
    {name : "Phone", price : 10000},
    { name: "laptop", price: 15000 },
    { name: "charger", price: 12000},
    { name: "Headphone", price: 20000 },
    { name: "SmartPhone", price: 50000 }

]

console.log(getTotalPrice(product));