const arr1 = [27,87,47,1,4,56,78];

//passing compare function in sort method
console.log(arr1.sort(function(a,b) { return  a-b }));  //Ascending Order

//using row function for callback
console.log(arr1.sort((a,b) => b-a));  //Descending Order

//Sorting Objects