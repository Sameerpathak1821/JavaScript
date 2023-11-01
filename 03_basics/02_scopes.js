let a = 10; // global scope, the value ofa is 10 globally.
const b =20;
var c = 30;

if(true){
    let a = 100;
    const b = 200;
    //console.log("INNER ",a); // block scope a is defined as 100 within {} only
}

//{} //=> this curley braces are called as scope



//console.log(a);
// console.log(b);
// console.log(c);


//NESTED SCOPE 

function one(){
    const username = "sameer";

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}
one()

// the gist for now is child function can access the variables of the parent function.

