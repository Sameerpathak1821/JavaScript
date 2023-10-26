// console.log(2>1); //true
// console.log(2<1); //false
// console.log(2==2);//true
// console.log(2!=2);//false


/***COMPARISION OF TWO DIFFERENT DATATYPE****/
 
console.log("2">1); //Here 2 is converted into number then it is compared with 1.

console.log(null>0); //false
console.log(null == 0); // false
console.log(null >=0); //true

/*The Reason is that an equality check == and comparisons > < >= <= works differently,
  Comparison converts null to a number, treating it a 0. 
  thats why null>=0 is true and null>0 is false.
*/



// strict check [===] => values are checked strictly means with value datatypes are also checked.

console.log("2"===2); //false






