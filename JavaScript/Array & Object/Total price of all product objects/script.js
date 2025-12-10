// Create a function that takes an array of product objects and returns total price.

function totalPrice(products){
    let total = 0;

    for(let p of products){
        total += p.price;

    }

    return total;

}

let products = [
    { name: "Pen", price: 20 },
    { name: " Book", price: 40 },
     { name : "Computer", price : 120058 }
]

console.log(totalPrice(products));
