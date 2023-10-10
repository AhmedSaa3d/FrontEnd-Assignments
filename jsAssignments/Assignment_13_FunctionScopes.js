// Assignment - 13
// Function And Scopes from 64 - 70

//13.1
// function getDetails(zName, zAge, zCountry) {
//   function namePattern(zName) {
//     let name = zName.split(" ");
//     return `Hello ${name[0]} ${name[1][0]}.`;
//   }
//   function ageWithMessage(zAge) {
//     let age = zAge.split(" ");
//     return `${age[0]} IS My Age`;
//   }
//   function countryTwoLetters(zCountry) {
//     let country = zCountry.split("");
//     return `You Live In ${country[0]}${country[1]}`;
//   }
//   function fullDetails() {
//     return (
//       namePattern(zName) +
//       ", " +
//       ageWithMessage(zAge) +
//       ", " +
//       countryTwoLetters(zCountry)
//     );
//   }
//   return fullDetails(); // Do Not Edit This
// }
// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG
// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

//13.2
// let itsmMe = (_) => `Iam A Normal Function`;
// console.log(itsmMe()); // Iam A Normal Function
// let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

//13.3   //////NOT SOLVED
// function checker(zName) {
//   return (status) => {
//     return (salary) => {
//       status === "Available"
//         ? `${zName}, My Salary Is ${salary}`
//         : `Iam Not Avaialble`;
//     };
//   };
// }
// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

//13.4
// function specialMix(...data) {
//   let ans = 0;
//   for (let i = 0; i < data.length; i++)
//     if (!Number.isNaN(parseInt(data[i]))) ans += parseInt(data[i]);
//   if (ans > 0) return ans;
//   return "All Is Strings";
// }
// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
