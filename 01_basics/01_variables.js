/*          VARIABLE DECLARATION      */

const accountId=123456;
let accountEmail="sameerpthak2021@gmail.com";
var accountPassword="Sameer@123"; //prefer not to use var because of issue in block scope and functional scope.

accountCity="Delhi"; // not a good practice.
let accountState;   // undefined datatype.

  //accountId=123;  // not allowed because accountId is constant

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);


// Tabular methd to print variables. [**important.]

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

//******************************************************* */



