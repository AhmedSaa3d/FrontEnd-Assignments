// Assignment 24
// Date, Time, Generators And Modules from 159 - 168

//24.1
// let myBirthDate = new Date("16 Aug 1998");
// let currentTime = new Date();
// let secondsDiffers = currentTime - myBirthDate;

// console.log(Math.trunc(secondsDiffers / 1000) + " Seconds");
// console.log(Math.trunc(secondsDiffers / 1000 / 60) + " Minutes");
// console.log(Math.trunc(secondsDiffers / 1000 / 60 / 60) + " Hours");
// console.log(Math.trunc(secondsDiffers / 1000 / 60 / 60 / 24) + " Days");
// console.log(Math.trunc(secondsDiffers / 1000 / 60 / 60 / 24 / 30) + " Months");
// console.log(
//   Math.trunc(secondsDiffers / 1000 / 60 / 60 / 24 / 30 / 12) + " Years"
// );

//24.2
// let startDate = new Date();
// startDate.setTime(0);
// console.log(startDate);
// startDate.setFullYear(startDate.getFullYear() + 10);
// startDate.setSeconds(startDate.getSeconds() + 1);

// // Needed Output
// // "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

//24.3
// let dt = new Date();
// dt.setDate(0);
// console.log(dt);
// let arr = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// console.log(
//   `Previous Month Is ${arr[dt.getMonth()]} And Last Day Is ${dt.getDate()}`
// );

//24.4
// let myBirthDate1 = new Date("16 August 1998");
// let myBirthDate2 = new Date("1998/8/16");
// let myBirthDate3 = new Date("1998-08-16T00:00:00");
// console.log(myBirthDate1);
// console.log(myBirthDate2);
// console.log(myBirthDate3);

//24.5
// let strt = performance.now();
// for (let i = 1; i < 1e5; i++) console.log(i);
// let end = performance.now();
// console.log(`Loop Took ${Math.trunc(end - strt)} Milliseconds`);
// // Loop Took 17243 Milliseconds

//24.6
// function* gen() {
//   let strt = 14;
//   let additional = 140;
//   while (true) {
//     yield strt;
//     strt += additional;
//     additional += 200;
//   }
// }
// let generator = gen();
// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}
// console.log(generator.next()); // {value: 8474, done: false}

//24.7
// function* genNumbers() {
//   yield* [1, 2, 2, 2, 3, 4, 5];
// }
// function* genLetters() {
//   yield* ["A", "B", "B", "B", "C", "D"];
// }

// function* genAll() {
//   yield* new Set(Array.from(genNumbers()));
//   yield* new Set(Array.from(genLetters()));
// }

// let generator = genAll();
// console.log(generator.next()); // {value: 1, done: false}
// console.log(generator.next()); // {value: 2, done: false}
// console.log(generator.next()); // {value: 3, done: false}
// console.log(generator.next()); // {value: 4, done: false}
// console.log(generator.next()); // {value: 5, done: false}
// console.log(generator.next()); // {value: "A", done: false}
// console.log(generator.next()); // {value: "B", done: false}
// console.log(generator.next()); // {value: "C", done: false}
// console.log(generator.next()); // {value: "D", done: false}

//24.8
// remember to write type="module" in html file script tag
// //main js File
// import * as modOne from "./mod-two.js";
// import calc from "./mod-one.js";
// console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60

// //mod one file
// export default function (a, b, c) {
//     return a + b + c;
//   }

// //mod two file
// let a = 10; // Do Not Edit Names
// let b = 20; // Do Not Edit Names
// let c = 30; // Do Not Edit Names
// export { a as numOne, b as numTwo, c as numThree };
