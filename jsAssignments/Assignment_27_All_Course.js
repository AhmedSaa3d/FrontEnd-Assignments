// Assignment 27
// All Course from 1 - 188

//Only [1] Not solved yet (45)
//Only [2] Not Working 100% (39 , 47)

//27.1
// let fileName = "Elzero.php";
// console.log(fileName.split(".")[0]); // Elzero
// console.log(fileName.split(".")[1]); // php

//27.2
// function addEl(str) {
//   if (str === "" || str.slice(0, 2) === "El") return str;
//   else return "El".concat(str);
// }
// console.log(addEl("")); // ""
// console.log(addEl("Elzero")); // Elzero
// console.log(addEl("zero")); // Elzero

//27.3
// let myString = "Hello Elzero Web School @ We Love Programming@ @#!@#$%%^&*";
// console.log(myString.split("@")[0] + " @ " + myString.split("@")[1]); // "Hello Elzero Web School @ We Love Programming"

//27.4
// function checkRange(n1, n2, n3, n4, n5) {
//   return [n1, n2, n3].every((ele) => {
//     return ele >= n4 && ele <= n5;
//   })
//     ? "Yes All Numbers In Range"
//     : "Not All Numbers Is In Range";
// }
// console.log(checkRange(5, 10, 15, 5, 50)); // Yes All Numbers In Range
// console.log(checkRange(8, 4, 20, 2, 50)); // Yes All Numbers In Range
// console.log(checkRange(10, 15, 20, 5, 18)); // Not All Numbers Is In Range

//27.5
// function replaceFirstWithLast(word) {
//   return word[word.length - 1] + word.slice(1, word.length - 1) + word[0];
// }
// console.log(replaceFirstWithLast("olzerE")); // Elzero
// console.log(replaceFirstWithLast("Hello")); // oelloH

//27.6
// function checkBiggestNum(word) {
//   return Math.max(...word.split(""));
// }
// console.log(checkBiggestNum("1500654")); // 6
// console.log(checkBiggestNum("8509507")); // 9

//27.7
// console.log([20, 100, 50, 10, 15, -20, 30].sort((a, b) => b - a).slice(0, 2)); //   (100, 50)

//27.8
// let nums = [10, 80, 85, 25, 30, 88, 15].sort((a, b) => a - b);
// let goal = 100,
//   mn = 1000,
//   ans;
// for (let i = 0; i < nums.length; i++)
//   if (Math.abs(goal - nums[i]) <= mn) {
//     ans = nums[i];
//     mn = Math.abs(goal - nums[i]);
//   }
// console.log(ans); // Closest Number Is 88

//27.9
// function swapEveryTwoChars(word) {
//   let ans = "";
//   for (let i = 0; i < word.length; i++) {
//     ans +=
//       i % 2 == 0
//         ? word[i].toLowerCase() === word[i]
//           ? word[i].toUpperCase()
//           : word[i].toLowerCase()
//         : word[i];
//   }
//   return ans;
// }
// console.log(swapEveryTwoChars("elZeRo")); // Elzero
// console.log(swapEveryTwoChars("heLlO")); // Hello

//27.10
// Write Your Function Implementation Here
// String.prototype.elzeroRepeat = function (num) {
//   return this.repeat(num);
// };
// console.log("Elzero ".elzeroRepeat(3)); // Elzero Elzero Elzero

//27.11
// let myMoney = 5301503206;
// myMoney = myMoney.toString().split("").reverse();
// let ans = "";
// for (let i = 0; i < myMoney.length; i++) {
//   ans += myMoney[i];
//   if (i % 3 === 2) ans += ",";
// }
// console.log(ans.split("").reverse().join("")); // 5,301,503,206

//27.12
// let names = ["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor"];
// let result = names.filter((ele) => {
//   return ele[0].toLocaleLowerCase() === ele[ele.length - 1].toLocaleLowerCase();
// });
// console.log(result); // ['Osso', 'Aola', 'Daad', 'Roor']

//27.13
// let theName = "Elzero";
// console.log(theName[0] + theName[theName.length - 1]); //Eo
// console.log(theName.slice(1, theName.length - 1)); // lzer
// console.log(theName.slice(theName.length / 2 - 1, theName.length / 2 + 1)); //ze

//27.14
// function repeatWithRules(word) {
//   let ans = "";
//   for (let i = 0; i < word.length; i++) {
//     ans += word[i].repeat(i + 1);
//   }
//   return ans;
// }
// console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo
// console.log(repeatWithRules("Hello")); // Heelllllllooooo

//27.15
// function concatenateWithoutLast(words) {
//   return words
//     .map((ele) => {
//       return ele.slice(0, ele.length - 1);
//     })
//     .join(" ");
// }
// console.log(concatenateWithoutLast(["Elzeros", "Webd", "Schoold"])); // Elzero Web School

//27.16
// function getCharacters(word, nums) {
//   return word.slice(0, nums) + word.slice(word.length - nums);
// }
// console.log(getCharacters("Elzero School", 2)); // Elol
// console.log(getCharacters("Elzero School", 3)); // Elzool

//27.17
// function formatName(theName) {
//   let ans = theName.split(" ").reduce((acc, ele) => {
//     return acc + ele[0].toLowerCase() + ".";
//   }, "");
//   return ans[0].toUpperCase() + ans.slice(1, ans.length - 1);
// }
// console.log(formatName("Osama Elzero")); // O.e
// console.log(formatName("Elzero Web School")); // E.w.s

//27.18
// let st = "elzero";
// console.log(st[0].toUpperCase() + st.slice(1)); // "Elzero"
// console.log(st[0].toUpperCase() + st.substring(1)); // "Elzero"
// console.log(st.split("")[0].toUpperCase() + st.split("").slice(1).join("")); // "Elzero"
// console.log(st.split("").shift().toUpperCase() + st.slice(1)); // "Elzero"
// console.log(st.split("").reverse().pop().toUpperCase() + st.slice(1)); // "Elzero"
// console.log(
//   st
//     .split("")
//     .map((ele, indx) => {
//       return indx == 0 ? ele.toUpperCase() : ele;
//     })
//     .join("")
// ); // "Elzero"
// // "Elzero"

//27.19
// let st = "Web SchoolElzero ";
// console.log(st.slice(-7) + st.slice(0, -7));// "Elzero Web School"

//27.20
// let st = "Elzero";
// console.log(st.slice(-1)); // "o"
// console.log(st.charAt(st.length - 1)); // "o"
// console.log(st.slice(st.length - 1)); // "o"
// console.log(st.substring(st.length - 1)); // "o"
// console.log(st.split("").pop()); // "o"
// console.log(st.split("").reverse().shift()); // "o"
// console.log(st.split("").splice(st.length - 1).join("")); // "o"

//27.21
// function getLastDigit(num) {
//   return num % 10;
// }
// console.log(getLastDigit(1)); // 1
// console.log(getLastDigit(18)); // 8
// console.log(getLastDigit(305)); // 5
// console.log(getLastDigit(1569)); // 9
// console.log(typeof getLastDigit(1569)); // Number

//27.22
// let str1 = "AElzero";
// let str2 = "ZAcademy";
// console.log(`${str1.slice(1)}\u00A0${str2.slice(1)}`); // Elzero Academy

//27.23
// function reversing(str) {
//   let rexg = /\w{2,}/g;
//   let words = str.match(rexg);
//  let ans = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == "@") ans += "@" + words.shift().split("").reverse().join("");
//     else if (str[i] == "," || str[i] == " ") ans += str[i];
//     else if (str[i - 1] == " ") ans += str[i];
//   }
//   return ans;
// }
// console.log(reversing(",@Hello, E@lzero")); // ,@olleH, E@orezl

//27.24
// function dashBetweenOdd(num) {
//   let ans = "";
//   let str = num.toString();
//   for (let i = 0; i < str.length - 1; i++) {
//     str[i] % 2 != 0 && str[i + 1] % 2 != 0
//       ? (ans += str[i] + "-")
//       : (ans += str[i]);
//   }
//   return ans + str[str.length - 1];
// }
// console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
// console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922

//27.25
// let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];
// console.log(myArr.splice(myArr.length)); //[]
// myArr.splice(0);
// console.log(myArr); //[]
// for (let i = 0; i < myArr.length; ) myArr.pop();
// for (let i = 0; i < myArr.length; ) myArr.shift();
// myArr = myArr.filter((ele) => {
//   ele < 0;
// });
// console.log(myArr);// []

//27.26
// let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];
// let myUniq = new Set(myArr);  // [10, 20, 30, 50] //1st

// let myUniq = [];     //[10, 20, 30, 50]       //2nd
// for (let i = 0; i < myArr.length; i++)
//   if (!myUniq.includes(myArr[i])) myUniq.push(myArr[i]);

// let myUniq = myArr.sort((a, b) => a - b);  //[10, 20, 30, 50]       //3rd
// for (let i = 0; i < myUniq.length; )
//   myUniq[i] == myUniq[i + 1] ? myUniq.splice(i, 1) : i++;

// for (let i = 0; i < myArr.length; i++) // [10, 20, 30, 50] //4th
//   for (let j = i + 1; j < myArr.length; j++)
//     if (myArr[i] == myArr[j]) myArr.splice(j, 1);

//27.27
// let myArr = ["69", "108", "122", "101", "114", "111"];
// let result = String.fromCodePoint(...myArr);
// console.log(result); // Elzero

//27.28
// function customMerge(...arr) {
//   let ans = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++)
//       if (typeof arr[i][j] == "number") ans.push(arr[i][j]);
//   }
//   return ans.sort((a, b) => a - b);
// }
// console.log(
//   customMerge([10, 20, "30", 1000], [100, "50", 20], [90, 20, "40", 10])
// );// [10, 10, 20, 20, 20, 30, 40, 50, 90, 100, 1000]

//27.29
// function customCalc(...arr) {
//   let ans = [];
//   for (let i = 0; i < arr.length; i++)
//     if (typeof arr[i] == "number" || !isNaN(+arr[i])) ans.push(+arr[i]);
//   let sum = 0;
//   sum = ans.reduce((ele, acc) => {
//     return acc + ele;
//   });
//   return sum * ans.shift() * ans.pop();
// }
// console.log(customCalc("10", 20, "A", "40", 15));// 12750 <= (10 + 20 + 40 + 15) * 10 * 15
// console.log(customCalc(5, "15", 10, 5, 10));// 2250 <= (5 + 15 + 10 + 5 + 10) * 5 * 10
// console.log(customCalc(30, 5, "C", 10));// 13500 <= (30 + 5 + 10) * 30 * 10

//27.30
// for (let i = 1; i < 100; i += 5) {
//   if (i % 2 != 0) console.log(i);
// }
// 1  11  21  31  41  51  61  71  81  91

//27.31
// let myArray = [100, 200, 300, 400];
// Method 1
// let clonedArray = [...myArray];
//Method 2
// let clonedArray = myArray.map((ele) => {
//   return ele;
// });
//Method 3
// let clonedArray = myArray.filter((ele) => {
//   return true;
// });
//Method 4
// let clonedArray = myArray.reduce((acc, ele) => {
//   acc.push(ele);
//   return acc;
// }, []);
//Method 5
// let clonedArray = [];
// myArray.forEach((ele) => {
//   clonedArray.push(ele);
// });
//Method 6
// let clonedArray = myArray.concat();
//Method 7
// let clonedArray = myArray.slice(0);
//Method 8
// let clonedArray = [...new Set(myArray)];
//Method 9
// let clonedArray = [];
// for (let i = 0; i < myArray.length; ) clonedArray.push(myArray.shift());
//Method 10
// let clonedArray = myArray.toLocaleString().split(",");
// console.log(clonedArray); // [100, 200, 300, 400]

//27.32
// let strNumber = "10";
// console.log(strNumber * 1); // 10  // Method 1
// console.log(+strNumber); // 10  // Method 2
// console.log(parseInt(strNumber)); // 10  // Method 3
// console.log(parseFloat(strNumber)); // 10  // Method 4
// console.log(Math.round(strNumber)); // 10  // Method 5
// console.log(Math.floor(strNumber.split("").join(""))); // 10  // Method 6
// console.log(+[...strNumber].join("")); // 10  // Method 7

//27.33
// console.log(
//   "%c Elzero Web School",
//   "color:white;background-color:#0075ff;padding:20px;font-size:30px;margin-left:50px"
// );

//27.34
// let arr = [1, 1, 1, 2, 3, 4, 3];
// let uniqueElements = new Set(arr); // [1, 2, 3, 4] //1st

// let uniqueElements = [];     //[1, 2, 3, 4]   //2nd
// for (let i = 0; i < arr.length; i++)
//   if (!uniqueElements.includes(arr[i])) uniqueElements.push(arr[i]);

// let uniqueElements = arr.sort((a, b) => a - b); // [1, 2, 3, 4]      //3rd
// for (let i = 0; i < uniqueElements.length; )
//   uniqueElements[i] == uniqueElements[i + 1]
//     ? uniqueElements.splice(i, 1)
//     : i++;

// let uniqueElements = arr.reduce((acc, ele) => {   // [1, 2, 3, 4]      //4th
//   if (!acc.includes(ele)) acc.push(ele);
//   return acc;
// }, []);

//27.35
// let data =
//   "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
// let serial = "";
// for (let i = 0; i < 20; i++)
//   serial += data[Math.floor(Math.random() * data.length)];
// console.log(serial); // 9cBcrg3kcWF4GZSlWXAM

//27.36
// let smallLetters = "";
// //  for (let i = 97; i <= 122; i++) smallLetters += String.fromCharCode(i); //firsttimeSolve
// // for (let i = 65; i <= 90; i++)
// //   smallLetters += String.fromCharCode(i).toLowerCase();//secondtimeSolve
// console.log(smallLetters); // abcdefghijklmnopqrstuvwxyz

//27.37
// let numOne = 100;
// let numTwo = 200;
// console.log(
//   numOne > numTwo ? "1st > 2nd" : numOne < numTwo ? "1st < 2nd" : "1st = 2nd"
// );

//27.38
// let str = "i lovE elzeRO weB schOOL";
// let ans = str[0].toUpperCase();
// for (let i = 1; i < str.length; i++) {
//   ans += str[i - 1] == " " ? str[i].toUpperCase() : str[i].toLowerCase();
// }
// console.log(ans); // "I Love Elzero Web School"

//27.39  //not work 100%
// let myData = ["Osama", "Mohamed", "Elsayed", "Elzero"];
// // delete myData.push;
// Object.freeze(myData);
// myData.push("Name");
// console.log(myData); // ['Osama', 'Mohamed', 'Elsayed', 'Elzero']

//27.40
// const myData = {
//   user: "Elzero",
//   age: 41,
//   country: "Egypt",
// };
// Object.preventExtensions(myData);
// myData.skill = "Programming";
// console.log(myData.user); // Elzero
// console.log(myData.age); // 41
// console.log(myData.country); // Egypt
// console.log(myData.skill); // Undefined

//27.41
// const myData = {
//   user: "Elzero",
//   age: 41,
//   country: "Egypt",
// };
// //method one
// // let cloned = {};
// // for (let i in myData) cloned[i] = myData[i];

// //method two
// // function myClon(a, b, c) {
// //   return {
// //     user: a,
// //     age: b,
// //     country: c,
// //   };
// // }
// // let cloned = myClon(myData.user, myData.age, myData.country);

// //method three
// // let cloned = {};
// // Object.assign(cloned, myData);

// //method Four
// // let cloned = { ...myData };

// //method Five
// let cloned = JSON.parse(JSON.stringify(myData));

// console.log(cloned); // {user: 'Elzero', age: 41, country: 'Egypt'}

//27.42
// let oneTimeShow = false;
// let lettersArr = [];
// function checkLettersPressed() {
//   if (
//     lettersArr[0] == "Control" &&
//     lettersArr[1] == "Shift" &&
//     lettersArr[2] == "Alt"
//   ) {
//     console.log("You Pressed Ctrl + Alt + Shift");
//     oneTimeShow = true;
//   }
// }
// window.onkeydown = function (event) {
//   lettersArr.push(event.key);
//   if (!oneTimeShow) checkLettersPressed();
// //   console.log(event.key);
// };
// window.onkeyup = function (event) {
//   lettersArr = [];
// };

//27.43
//Done before in Project : repose Githube Fetch

//27.44
// let last = 30;
// let sum = 0;
// let oddTimeOkTimeNot = true;
// for (let i = last; i >= 1; i--) {
//   if (i % 2 != 0) {
//     if (oddTimeOkTimeNot) {
//       console.log(i);
//       sum += i;
//       oddTimeOkTimeNot = false;
//     } else oddTimeOkTimeNot = true;
//   }
// }
// console.log(sum);

//27.45 //not solved 2 methods
// let rangeEnd = 10;
// let myRange = [];
//method one
// for (let i = 1; i <= rangeEnd; i++) myRange.push(i);
//method two
//method three
// Output Needed
// console.log(myRange); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//27.46
// let nums = [10, -20, 300, 50, 100, -50];
// let maxNumber = nums.sort((a, b) => a - b)[nums.length - 1];
// let maxNumber = nums.sort((a, b) => b - a)[0];
// let maxNumber = nums[0];
// for (let i = 0; i < nums.length; i++)
//   if (nums[i] > maxNumber) maxNumber = nums[i];
// let maxNumber = Math.max(...nums);
// console.log(maxNumber); // 300

//27.47  //not working
// let saveInptValue;
// document.querySelector(".form button").onclick = function () {
//   saveInptValue = document.querySelector(".form textarea").value;
//   console.log(saveInptValue);
//   saveStaticDataToFile();
// };
// function CreateTextFile() {
//   var blob = new Blob(["This is a sample file content."], {
//     type: "text/plain;charset=utf-8",
//   });
//   saveAs(blob, "download.txt");
// }

//27.48
// function createStars(num) {
//   for (let i = 1, cnt = 1; i <= num; i++, cnt += 2) console.log("*".repeat(cnt));
// }
// console.log(createStars(8));
// // Output Needed
// //   *
// //   ***
// //   *****
// //   *******
// //   *********
// //   ***********
// //   *************
// //   ***************

//27.49
// function createStars(num) {
//   let cnt = 1;
//   for (let i = 1; i <= num; i++, cnt += 2) console.log("*".repeat(cnt));
//   cnt -= 4;
//   for (let i = 1; i < num; i++, cnt -= 2) console.log("*".repeat(cnt));
// }
// console.log(createStars(7));
// // // Output Needed
// // *
// // ***
// // *****
// // *******
// // *********
// // ***********
// // *************
// // ***********
// // *********
// // *******
// // *****
// // ***
// // *

//27.50
// function createStars(num) {
//   let c = 0;
//   for (let i = 0; i < num; i++, c++)
//     console.log(
//       " ".repeat(c) + "*".repeat(num * 2 - 1 - 2 * c) + " ".repeat(c)
//     );
//   c--;
//   for (let i = 0, cnt = 1; i < num; i++, c--, cnt += 2)
//     console.log(" ".repeat(c) + "*".repeat(cnt) + " ".repeat(c));
// }
// createStars(6);
