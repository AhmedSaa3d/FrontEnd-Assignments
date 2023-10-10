//   Challenge 6
//   Switch And If Condition - Video 39

let jop = "Manager";
let salary = 0;

switch (jop) {
  case "Manager":
    sal = 8000;
    break;
  case "IT":
  case "Support":
    sal = 6000;
    break;
  case "Developer":
  case "Designer":
    sal = 7000;
    break;
  default:
    sal = 4000;
}
console.log(sal);

let holidays = 0;
let money = 0;

if ((holidays = 0)) money = 5000;
else if (holidays === 1 || holidays === 2) money = 3000;
else if (holidays === 3) money = 2000;

console.log(`My Money is ${money}`);
