// MEDIUM: Write a function that would allow you to do this:
// var sharePizza = cutPizzaSlices(8); console.log(sharePizza(2));
// // prints "Each person gets 4.00 slices of pizza" console.log(sharePizza(3));
// // prints "Each person gets 2.67 slices of pizza"

// created a variable to call the function

let sharePizza = function cutPizzaSlices(people) {
    let s = 8 / people
    return `Each person gets ${s} slices of pizza`
}
console.log(sharePizza(2))
console.log(sharePizza(3))
