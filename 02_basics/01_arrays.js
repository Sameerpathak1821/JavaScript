 //Arrays :- collection of different items stored in a single varialble.

 //DECLARATION OF THE ARRAY

 const myArray =[2,3,5,4,7,8,true,"sameer"]; // In JavaScript the array is not bound to contain same kind of elements, we access the elements of the array by their index and the indexing is 0 based indexing means it starts from 0.

 const myHeros = ["Ironman","Thor","Captain america"]

 //another method of declaring an array using new Array.

 const myArray2 = new Array (1,3,2,4)
 console.log(myArray2);
 console.log(myArray2[1]);
 console.log(myArray2.length); // length of an array

 // ARRAY METHODS
 const myArr = [1,2,3,4,5,];

 //  1) push :- used to insert an element at the end of  the array.
myArr.push(6);
 //console.log(myArray);

// 2) pop :- used to remove the last element ofthe array, pop did'nt requires any parameter to be passed.

myArr.pop();
//console.log(myArray);

//3) unshift :- it is used when we have to add an element at the beigning of the array.

myArr.unshift(9);

//4)shift :- it is used to remove an element from the beigning of the array, no need to pass any argument with shift.

myArr.shift();
//console.log(myArr);

//5) includes() :- it is a quetionare method which answer in t/f,include will answer either the entered element is present in the array or not.

//console.log(myArr.includes(10)); //false

//6) indexOf():- this method will return the index of an element of the array in numbers.

//console.log(myArr.indexOf(4)); //3


//7) join():- this converts an array into a string.

const newArr = myArr.join()
//console.log(myArr);
//console.log(newArr);
//console.log(typeof newArr); //string

//8) slice:- it returns the copy of a segment of an array.

console.log("A ", myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B ",myArr);


//9) splice() :- splice method make change in originala array by removing the elements in it range

// const myArr2 =myArr.splice(1,3)
// console.log(myArr);
// console.log("c" ,myArr2);


 



