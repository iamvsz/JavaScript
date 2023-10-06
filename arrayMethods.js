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

//copyWithin() method shallow copies part of an array to another location in the same array and returns the modified array without modifying its length.
//Syntax.copyWithin(target, start, end)

let numbers = [1,2,3,4,5];
numbers.copyWithin(2,0,2);
console.log(numbers);

//push() method adds one or more elements to the end of and array and returns the new length of the array.

let name = ["Vishal", "Santosh"];
name.push("Zade");
console.log(name);

//unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

let unshiftElements = ["Santosh", "Zade"];
unshiftElements.unshift('Vishal', 'Zade');
console.log(unshiftElements);

//concat() - method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

let TT = ["Tu", "Tujha"];
let MM = ["Mi", "Majha"];
let TTMM = TT.concat(MM);
console.log(TTMM);

//splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
let spliceElements = ['apple', 'banana', 'cherry', 'orange'];
spliceElements.splice(2, 1, 'mango', 'kiwi'); ///splice(start, deletecount, item1,...,item2);
console.log(spliceElements);

const numberArray = [1, [2, [3]], 4];
console.log(numberArray.flat(Infinity));   //[ 1, 2, 3, 4 ]

const indexOfElements = [5, 10, 5, 15, 20, 25];
console.log(indexOfElements.indexOf(5)); //0

//lastIndexOf()
console.log(indexOfElements.lastIndexOf(5)); //2

//of() - This method creates a new array instance with a variable number of arguments,
//regardless of number or type of the arguments.

const arrOfElements = Array.of(13, "Mera", "Milna", true);
console.log(arrOfElements);

//every() - this method checks if all elements in an array pass a test(provided as a function). It returns true if all elements pass the test; otherwise, it returns false

const arrOfEvery = [2,4,6,8];
const isEven = (num) => num % 2 ===0;
console.log(arrOfEvery.every(isEven));

//slice() - Thismethod returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included)

 const slicedArr = [1, 2, 3, 4, 5];
 console.log(slicedArr.slice(2, 4));

 //flatMap(): This method maps each element using a mapping function, then flattens the result into a new array.

const arrFlatMap = [1, 2, 3];
console.log(arrFlatMap.flatMap(x => [x * 2]));

//findIndex(): This method returns the index of the first element in an array that passes a test (provided as a function). If no element passes the test, it returns -1

const arrFindIndex = [10, 20, 30, 40, 50];
console.log(arrFindIndex.findIndex((num) => num > 20 ));

//Find() - This method is used to return the first element in an array that passes a test
//(provided as a function)

console.log(arrFindIndex.find((num) => num > 20));
console.log(arrFindIndex[arrFindIndex.findIndex(num => num > 20)]);


















