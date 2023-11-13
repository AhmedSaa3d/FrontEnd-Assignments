//Assignment 21
// Map And Set from 123 - 133

// 21.1
// let setOfNumbers = new Set([10]);
// setOfNumbers.add(20).add(setOfNumbers.size);
// console.log(setOfNumbers);
// console.log([...setOfNumbers].pop());

//21.2
// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// console.log(new Set(myFriends.sort()));
// Needed Output //(4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

//21.3
// let myInfo = {
//   username: "Osama",
//   role: "Admin",
//   country: "Egypt",
// };

// let myMap = new Map(Object.entries(myInfo));
// console.log(myMap); //Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// console.log(myMap.size); //3
// console.log(myMap.has("role")); // true

//21.4
// let theNumber = 100020003000;
// console.log(
//   +[...new Set(Array.from(theNumber.toString()))]
//     .filter((e) => e != false)
//     .join("")
// );// 123

//21.5
// let theName = "Elzero";
// console.log([...theName]);                   //first Way
// console.log(theName.split(""));             //second Way
// console.log(Array.from(theName));          //third Way
// console.log([...new Set(theName)]);       //Forth Way
//console.log(Array.from(new Set(theName)));//Fifth Way
// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

//21.6
// let chars = ["Z", "Y", "A", "D", "E", 10, 1];
// let NewChars = chars.filter((e) => isNaN(e) == true);
// console.log([
//   ...NewChars.slice(0, chars.length - NewChars.length),
//   ...NewChars,
// ]);
// Needed Output ["Z", "Y", "Z", "Y", "A", "D", "E"]

//21.7
// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];
// console.log([...numsOne, ...numsTwo]);   //first Way
// console.log(numsOne.concat(numsTwo));   //Second Way
// console.log(numsOne.push(...numsTwo)); //Third Way
// Needed Output
//[1, 2, 3, 4, 5, 6]

//21.8
//video challenge
// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];
// console.log(Math.max(...n2) * n1.concat(n2).length);// 210;
