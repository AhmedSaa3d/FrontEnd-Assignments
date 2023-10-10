// Assignment - 9
// Arrays And Methods from v40 - 47

//9.1
// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;
// console.log(myFriends.slice(false, num)); // ["Ahmed", "Elham", "Osama"];
// console.log(myFriends.splice(false, num)); // ["Ahmed", "Elham", "Osama"];

//9.2
// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
// console.log(
//   friends.splice(Array.isArray(friends), friends.length - true - true)); // ["Eman", "Osama"]

//9.3
// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];
// console.log(
//   finalArr.concat(arrTwo.pop(), arrOne.reverse(), arrTwo.pop(), arrTwo.pop())
// ); // ["Z", "X", "D", "C", "B", "A"]

//9.4
// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
//console.log(words.pop().shift().toUpperCase().slice(website.length)); // ZERO

//9.5
// let needle = "JS";
// let haystack = ["JS", "PHP", "ldldld", "JS", "Python"];
// if (haystack.includes(needle) >= 0) console.log("Found");
// if (haystack.lastIndexOf(needle) >= 0) console.log("Found");
// if (haystack.indexOf(needle) >= 0) console.log("Found");

//9.6
// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];
// console.log(
//   allArrs
//     .concat(arr2.pop(), arr1.pop(), arr2.pop())
//     .reverse()
//     .join("")
//     .toLowerCase()
// ); // fxy
