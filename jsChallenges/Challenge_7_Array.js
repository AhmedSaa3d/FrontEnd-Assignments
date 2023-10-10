//   Challenge 7
//   Array - Video 47

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
console.log(my.slice(my.indexOf("Ahmed"), my.indexOf("Gamal")).reverse()); //["Osama","Elham","Mazero","Ahmed"]
console.log(my.slice(++zero, counter).reverse()); //["Elham", "Mazero"]
console.log(
  my[--counter].substring(--zero, counter) + my[--counter].substring(++counter)
); //Elzero
//zero =0; counter=2;
console.log(
  my[++zero].substring(my.length - counter, my.length - zero) +
    my[zero].substring(my.length - zero).toUpperCase()
); //rO
