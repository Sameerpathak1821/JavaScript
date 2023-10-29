//1) singleton:- it is a method to createan object using create,constructor are formed in this method.

//Object.create


// 2) object literals :- it is a method of declearing an object.
// CREATING AN OBJECT.
const Jsuser = {
    name: "sameer",
    "full name": "sameer pathak",
    age: 18,
    location: "Delhi",
    email:"sameerpathak2021@gmail.com",
    isLoggedIn:false,
    lastLoggedinDates: ["monday","wednesday"]
}

//ACCESSING AN OBJECT

//1) console.log(Jsuser.name) // major fault in this method is we can't access the key when it is decleared in string format.

//2)

console.log(Jsuser["email"]);

// how to modify/overwrite the values of an object.

Jsuser.name = "sameer pathak"
console.log(Jsuser["name"]);

// how to freeze the values of an object.

Object.freeze(Jsuser) // now our object is freezed,no change will be applicable.

Jsuser.email = "sameer@google.com"
console.log(Jsuser);



