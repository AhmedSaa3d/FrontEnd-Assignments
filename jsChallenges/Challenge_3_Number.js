//   Challenge 3
//   Number - Video 26

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

//find smallest number in All variables and return integer
console.log(Math.round(Math.min(a, b, c, d)));

//use variable a + d one time to get the needed output
console.log(a * c); //10000

//Get Integer "2" from d variable with 4 methods
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Math.ceil(d) - 1);

//use variable b + d to get this values
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); //66.67 =>string
console.log(Math.round(b) - Math.floor(d) * 67); // 67 =>number
