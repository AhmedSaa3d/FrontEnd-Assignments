//   Challenge 10
//   Arrow Function - Video 70

// [1.1] One Statement In Function
// [1.2] Convert To Arrow Function
// [1.3] Print The output [Arguments May Change]
//in anonymous function
let names1 = function (...arr) {
  // parameter ?
  return "String [" + arr.join("], [") + "] => Done !";
};
//in arrow function
let names2 = (...arr) => "String [" + arr.join("], [") + "] => Done !";
console.log(names2("Ahmed", "Osama", "Mahmoud", "Omar")); // String [Ahmed], [Osama], [Mahoud], ["Omar"] => Done !
// [2.1] Replace ??? In Return Statement To Get The Output
// [2.2] Create The Same Function With Regular Syntax
// [2.3] Use Array Inside The Arguments To Get The Output
let myNumbers = [20, 50, 10, 60];
let calc = (one, two, ...nums) => one + two + nums[0];
console.log(calc(10, myNumbers[0], myNumbers[1])); //80
