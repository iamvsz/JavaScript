//JavaScript Array Methods


//Defining Array
const arr = ['apple', 'banana', 'cherry'];

//values() - This methods returns an iterator that provides the value of each index in the array. It takes no argument.
const iterator =  arr.values();
for(const value of iterator) {
    console.log(value);
}

//apple
//banana                         
//cherry 



//length : It is the property that returns length of the array.
console.log(arr.length); //3

//reverse() - This method reverse the array elements, This method reverse the original array means it will mutate the original array.
console.log(arr.reverse()); //[ 'cherry', 'banana', 'apple' ]

//sort Method
console.log(arr.sort());

//at() method - This method returns the element at the specified index in the array. It takes one argument the index

console.log(arr.at(1));

//fill method- This method fills all the elements of an array from a start index to an index with a static value. It can take up to three arguments: the value to fill with, the start index, and end index

arr.fill(('orange'),1,2);
console.log(arr);

//from(): This method creates a new array from an array-like object or and interable object to convert to an array, and a mapping function to apply to each element of the new array.
const obj = { 0: 'apple', 1: 'banana', 2: 'cherry', length: 3}
const duplicateArray = Array.from(obj);
console.log(duplicateArray);

//Join: This method joins all the elements of an array into a string using a specified separator. It takes one optional argument: the separator to use
const str = arr.join(', ');
console.log((str));

//toString(): This method returns a string representing the array and its e
const strr = arr.toString();
console.log(strr)

//pop(): This method removes the last element from an array and returns that element
const last = arr.pop();
console.log(last);

//forEach(): method executes a provided function once for each array element. It doesn't return anything, It just executes the callback function on each element of the array.
let fruits = ['apple', 'banana', 'cherry']
fruits.forEach(function (item) {
    console.log(item);
});

//shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
let fruitsFamily = ["Apple", "Orange", "Banana", "Cherry"];
let shiftFruit = fruitsFamily.shift();
console.log(shiftFruit);
console.log(fruitsFamily);







