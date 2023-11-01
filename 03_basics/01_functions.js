// Function :- function is a piece of code which is placed in a scope, which can be called again N again when we need that piece of code

// How to declare a function


/* function function_name(){
    code...
}
 */

function printMyName(){
    console.log("S");
    console.log("A");
    console.log("M");
    console.log("E");
    console.log("E");
    console.log("R");
}

// How to call a function

//printMyName()

//FUNCTION TO ADD TWO NUMBERS 

function addTwoNumbers(number1 , number2){
    console.log(number1 +number2);
}
//addTwoNumbers(3 , 4) // calling function

// function ki defination mai jo values pass krte hai we call them as parameters(line 26)

// values which are passed while calling a function, the values are called as arguments.(line 29)


// another and good way of function declaration using return 

function multiplyTwoNumbers(num1 , num2){
    let product = num1*num2;//creating other variable
    return product; // returning the variable
}

 const product = multiplyTwoNumbers(2 ,3)// creating variable and saving the result
 //console.log("Product:", product); // printing the product.


 function loginUserName(username){
    return `${username} just logged in`
 }
//console.log(loginUserName("sameer"));
// undefined will occour when we do not pass any value.


// Rest operator in the function(...) :- it is used when we need to pass multiple parameters in the function

function calculatecartprice(...num1){
return num1
}
console.log(calculatecartprice(200,300,100));
// output will be an array.

//functions and object.

const user = {
    username : "sameer pathak",
    age : 18,
}

function handleObject(anyobject){
    console.log(`username is ${user.username} and age is ${user.age}`);
}
//handleObject(user); // calling the function


//passing array in the function

const myNewArray =[100,200,303,5958,985]
function returnSecondArray(getArray){
return getArray[3]
}
console.log(returnSecondArray(myNewArray));
