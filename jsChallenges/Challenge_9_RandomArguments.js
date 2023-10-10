//   Challenge 9
//   Random Arguments - Video 63

//create function accept 3 parameters [a,b,c]
//Data Types For Info Is
//string -> name
//number -> age
//boolean -> Status
//Arguments is random
//use ternary conditional operator
function showDetails(...arr) {
  let name, age, status;
  for (let i = 0; i < arr.length; i++)
    typeof arr[i] === "number"
      ? (age = arr[i])
      : typeof arr[i] === "string"
      ? (name = arr[i])
      : arr[i] === true
      ? (status = "Available")
      : (status = "Not Available");
  console.log(`Hello ${name}, Your Age is ${age}, Your Are ${status} For Hire`);
}
showDetails("Ahmed", 25, true); //Hello Ahmed ,Your Age Is 25 ,Your Are Available For Hire
showDetails(25, "Ahmed", true); //Hello Ahmed ,Your Age Is 25 ,Your Are Available For Hire
showDetails(25, true, "Ahmed"); //Hello Ahmed, Your Age is 25, Your Are Available For Hire
showDetails("Ahmed", false, 25); //Hello Ahmed ,Your Age Is 25 ,Your Are NOT Available For Hire
