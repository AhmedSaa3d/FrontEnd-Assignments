// Assignment 18
// Browser Object Model - 1 from 102 - 110

//18.1
// let strRange = prompt("Print Number From - To", "Example: 5-20");
// let arrNums = strRange.split("-");
// let mn = Math.min(parseInt(arrNums[0]), parseInt(arrNums[1]));
// let mx = Math.max(parseInt(arrNums[0]), parseInt(arrNums[1]));
// while (mn <= mx) {
//   console.log(mn++);
// }

//18.2
// //css Style Not Matter
// let mainDiv = document.createElement("div");
// mainDiv.style.cssText =
//   "background-color: #EEE; border: 1px solid #333; text-align: center; width: 250px; height: 150px; position: fixed; top: -200px; left: 30%; ";
// let h1main = document.createElement("h1");
// h1main.textContent = "Welcome";
// h1main.style.cssText = "color: #333; font-size: 35px;";
// let txNode = document.createTextNode("Welcome To Elzero Web School");
// let xNode = document.createElement("span");
// xNode.textContent = "X";
// xNode.style.cssText =
//   "width: 50px;font-size: 20px; background-color: red; color: white; cursor: pointer; position :absolute; top: -10px; right: -10px;";
// mainDiv.append(h1main);
// mainDiv.append(txNode);
// mainDiv.append(xNode);
// document.body.append(mainDiv);
// setTimeout(function () {
//   mainDiv.style.top = "20px";
// }, 4000);
// xNode.onclick = function () {
//   mainDiv.style.display = "none";
// };

//18.3
// let mainDiv = document.createElement("div");
// mainDiv.style.cssText = "font-size : 50px; color: #333";
// mainDiv.textContent = prompt("Enter Number To Count From: ", "10") || 10;
// document.body.append(mainDiv);
// let divNum = parseInt(mainDiv.textContent);
// let idTime = setInterval(function () {
//   if (divNum > 0) mainDiv.textContent = --divNum + "";
//   if (divNum == 5) {
//     open(
//       "https://elzero.org/javascript-bootcamp-assignments-lesson-from-102-to-110/",
//       "_blank",
//       "width: 100, height:100"
//     );
//   } else if (divNum <= 0) {
//     clearInterval(idTime);
//     location.assign(
//       "https://elzero.org/javascript-bootcamp-assignments-lesson-from-102-to-110/"
//     );
//   }
// }, 1000);
