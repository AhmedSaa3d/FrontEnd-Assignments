// Assignment 14
// Higher Order Functions from 71 - 78

//14.1
// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// let ans = mix
//   .map(function (ele) {
//     if (!Number.isInteger(ele)) return ele;
//     return "";
//   })
//   .reduce(function (acc, current) {
//     return `${acc}${current}`;
//   });
// console.log(ans);

//14.2
// let myString = "EElllzzzzzzzeroo"; // Elzero
// let ansCon = "";
// myString.split("").filter(function (ele, indx, arr) {
//   if (ele != arr[indx - 1]) ansCon += ele;
// });
// console.log(ansCon);

//14.3  ///NOT Solved
// let myArray = ["E", "l", "z", ["e", "r"], "o"];
// Elzero

//14.4  ///NOT Solved
// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// [-1, -10, 10, 20, -5, -3]

//14.5    ///NOT Solved
// let nums = [2, 12, 11, 5, 10, 1, 99];
// // 500
