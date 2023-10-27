const name="sameer pathak"
const repoCount= 50
// 1st way to concatination.
console.log(name + repoCount + " value"); 

//2nd way and good way to concatinate multiple strings
// using back ticks. this methodis known as string interpolation.   


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


let gameName ="sameer"
// console.log(gameName[0]);
// console.log(gameName[1]);

//METHODS IN STRING

/*1) LENGTH :- we can find the length of string using .length method for example*/

console.log(gameName.length);
console.log(gameName.toUpperCase());// () because touppercase is a function

/*2) chatAT() :- used to check the position of particular string */
console.log(gameName.charAt(4));  // chatAt():- Number are passed.

/*3) indexOf() :- IT GIVES THE INDEX OF A PARTICULAR STRING */
console.log(gameName.indexOf('r')); //indexOf():-characters are passed

// homework :- read more about string methods and   
    //create an article about it.

