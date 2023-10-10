//   Challenge 5
//   If Condition - Video 37

let a = 10;

a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 TO 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");

let str = "Elzero Web School";

if (str.length * 2 + "" === "34") console.log("Good1");

// W posion wmay change
if (str[str.indexOf("W")].toLocaleLowerCase() === "w") console.log("Good2");

if (str !== "string") console.log("Good3");

if (str.replace(str, "number") === "number") console.log("Good4");
//if typeof (st.length) === "number") another sol for good4

if (str.slice(0, 6).repeat(2) === "ElzeroElzero") console.log("Good5");
