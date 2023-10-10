//   Challenge 4
//   String - Video 30

//All Solutions Must Be In One Chain
//You Can Use Concatenate
let a = "Elzero Web School";
// Include This Methods In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); //Zero
// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH
// Return Array
console.log(a.split(" ", 1)); //[Elzero]
//USe Only substr(deprecated) Method + template Literals In Your Solution
console.log(`${a.slice(0, 6)} ${a.slice(-6)}`); //Elzero School
// Solution Must Be Dynamic And String May Change
console.log(
  a[0].toLowerCase() +
    a.slice(1, a.length - 1).toUpperCase() +
    a[a.length - 1].toLowerCase()
); //eLZERO WEB SCHOOl
