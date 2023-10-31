//singleton way of declearing an object

const tinderUser = new Object()
tinderUser.id= "123abc"
tinderUser.name = "sameer"
tinderUser.isLoggedIn = "false"
//console.log(tinderUser);


// object within an object

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullName:{
            firstName: "sameer",
            lastName: "pathak",
        } 
    }
}
//how to access the values of nested object => using.(dot) notation.

//console.log(regularUser.fullname.userfullName.firstName);

// merging/combining two objects.

const obj1 = {
    1: "a",
    2: "b",
    3 :"c",
}
const obj2 ={
    4: "d",
    5: "e",
    6: "f",
}
// combining objects method 1
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

// combining object method 2 using spread

const obj3= {...obj1,...obj2}
//console.log(obj3);

console.log(Object.keys(tinderUser)); // give all the keys as an array

console.log(Object.values(tinderUser)); // give all the values as ana array

console.log(Object.entries(tinderUser)); // give all the key value pair as an array

console.log(tinderUser.hasOwnProperty('isLoggedIn')) // to check a property exist or not.

// Destructuring an object.

const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstructor : "chai aur code",
}

const {courseInstructor: instructor} = course

console.log(instructor);


