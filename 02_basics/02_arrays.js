const marvel_heros = ["Thor","Iron man", "Spiderman"]
const dc_heros = ["superman", "flash", "X-men"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros); // we will get array of arrays or nested array.

//console.log(marvel_heros[3]);
//console.log(marvel_heros[3][0]);

// how to merge two arrays.

const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);

// insted of using concat operation we can use spread operation to add the elements of two arrays.

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);


console.log(Array. isArray("sameer pathak"));// to check array or not.

console.log(Array.from("sameer pathak")); // to convert it into array.

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); // will convert the above 3 variables into a single array.













