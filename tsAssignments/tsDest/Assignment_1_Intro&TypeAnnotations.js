"use strict";
// Assignment 1
// Intro & Type Annotations from 1 - 11
//1.1 -> done
//1.2
// function calculate(numOne:number, numTwo:number):number {
//      return numOne + numTwo;
//    }   
// console.log(calculate(10, 20)); // 30
// console.log(calculate("10", "20")); // We Don't Need This To Work
// console.log(calculate(+true, +true)); // 2
//1.3
// function printInfo(valueOne:(number | string), valueTwo:(number | string)):string {
//      return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
//    }
// console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
// console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work
//1.4
// let arr: (number | boolean[] | (string | (string | number)[])[])[] = [10,[true,false],["str1","str2"],[["str3","str4"],[10,20],"str5"],[true,false],11];
// console.log(arr);
//1.5
// function reportErrors(username: string, age: number) {
//      let rank = "Professor";
//      return `Username: ${username}`;
//      console.log("We Will Not Reach Here");
//    }
// console.log(reportErrors("Elzero", 40));
//1.6
// let nothing = " ";
// let theName: string = "Elzero";
// function showMyDetails(a = "", b = "", c) {
//   return `${a}${b}${c}`;
// }
// // Replace ???? With The Available Variables As Argument To Get The Result
// console.log(showMyDetails(nothing,nothing,theName)); // Elzero
//1.7
// function showMsg(user?: string, age?: (number | string), country?:string) {
//      return `${user}${age}${country}`;
//    }
//    console.log(showMsg()); //undefinedundefinedundefined
//    console.log(showMsg("Elzero"));//Elzeroundefinedundefined
//    console.log(showMsg("Elzero", 40));//Elzero40undefined
//    console.log(showMsg("Elzero", "40", "Egypt"));//Elzero40Egypt
//1.8
// function printInConsole(...arr:(number | string | boolean)[]):string{
//      arr.forEach((ele)=>{
//           console.log(`The Value Is ${ele} And Type Is  ${typeof ele}`);
//      })
//      return "done";
// }
// // Using The Function => Do Not Edit
// console.log(printInConsole(1, 2, 3, 4, 5));
// console.log(printInConsole("A", "B", "C"));
// console.log(printInConsole(true, false, false, true, true));
