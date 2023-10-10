// Assignment - 12
// Function And Parameters from 57 - 63

//12.1
// function sayHello(theName, theGender = "none") {
//   if (theGender === "Male") return console.log(`Hello Mr ${theName}`);
//   if (theGender === "Female") return console.log(`Hello Miss ${theName}`);
//   return console.log(`Hello ${theName}`);
// }
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"

//12.2
// function calculate(firstNum, secondNum, operation = "add") {
//   if (!Number.isInteger(secondNum))
//     return console.log("Second Number Not Found");
//   if (operation === "add") return console.log(firstNum + secondNum);
//   if (operation === "subtract") return console.log(firstNum - secondNum);
//   if (operation === "multiply") return console.log(firstNum * secondNum);
// }
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, "add"); // 50
// calculate(20, 30, "subtract"); // -10
// calculate(20, 30, "multiply"); // 600

//12.3
// function ageInTime(theAge) {
//   if (theAge < 10 || theAge >= 100) return console.log("Age Out Of Range");
//   theAge *= 12;
//   console.log(`Months : ${theAge}`);
//   theAge *= 30;
//   console.log(`Days : ${theAge}`);
//   theAge *= 24;
//   console.log(`Hours : ${theAge}`);
//   theAge *= 60;
//   console.log(`Minutes : ${theAge}`);
//   theAge *= 30;
//   console.log(`Seconds : ${theAge}`);
// }
// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months

//12.4
// function showDetails(...arr) {
//   let name, age, status;
//   for (let i = 0; i < arr.length; i++)
//     typeof arr[i] === "number"
//       ? (age = arr[i])
//       : typeof arr[i] === "string"
//       ? (name = arr[i])
//       : arr[i] === true
//       ? (status = "Available")
//       : (status = "Not Available");
//   console.log(`Hello ${name}, Your Age is ${age}, Your Are ${status} For Hire`);
// }
// function checkStatus(a, b, c) {
//   showDetails(a, b, c);
// }
// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

//12.5
// function createSelectBox(startYear, endYear) {
//   document.write(`<select>`);
//   for (; startYear <= endYear; startYear++) {
//     document.write(`<option value="${startYear}">${startYear}</option>`);
//   }
//   document.write(`</select>`);
// }
// createSelectBox(2000, 2021);

//12.6
// function multiply(...arr) {
//   let ans = 1;
//   for (let i = 0; i < arr.length; i++)
//     if (typeof arr[i] !== "string") ans *= Number.parseInt(arr[i]);
//   return console.log(ans);
// }
// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000
