//Scenario -1 //if you don't want to mutate the original array then try the following.

//First method
const original = ["I", "Love", "You"];

let reversed = original.slice().reverse();
console.log(reversed);
console.log(original);

//Second method - spread operator
const reversed1 = [...original].reverse();
console.log(reversed1);
console.log(original);


//Third method
const reversed2 = Array.from(original).reverse();
console.log(reversed2);
console.log(original);