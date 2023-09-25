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

