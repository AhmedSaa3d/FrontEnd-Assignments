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

//14.3
// let myArray = ["E", "l", "z", ["e", "r"], "o"];
// // console.log(typeof myArray);
// console.log(
//   myArray.reduce((acc, ele) => {
//     if (typeof ele == "object")
//       return (
//         acc +
//         ele.reduce((newAcc, newEle) => {
//           return newAcc + newEle;
//         }, "")
//       );
//     return acc + ele;
//   }, "")
// ); // Elzero

//14.4
// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// console.log(
//   numsAndStrings
//     .filter((ele) => {
//       return !isNaN(ele);
//     })
//     .map((ele) => {
//       return ele * -1;
//     })
// ); // [-1, -10, 10, 20, -5, -3]

//14.5
// let nums = [2, 12, 11, 5, 10, 1, 99];
// console.log(
//   nums.reduce((acc, ele) => {
//     return ele % 2 != 0 ? acc + ele : acc * ele;
//   }, 1)
// );// 500
