//   Challenge 11
//   Higher Order Function - Video 78

//You Can Use
// _ , Space , (True => one time)
// You Cannot use
// Numbers   Letters
//You Must Use [filter + map + reduce + your Knoledge]
// Order is not important
// All in one chain

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,z";
let solution = myString
  .split("")
  .filter(function (ele) {
    return isNaN(parseInt(ele)) && ele != ",";
  })
  .map(function (ele) {
    return ele === "_" ? " " : ele;
  })
  .slice(myString.split("").shift(), -true)
  .reduce(function (acc, current) {
    return acc + current;
  });

console.log(solution);
