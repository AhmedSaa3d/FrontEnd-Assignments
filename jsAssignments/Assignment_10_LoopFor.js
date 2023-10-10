// Assignment - 10
// Loop For from v48 - v53

//10.1
// let start = 10;
// let end = 100;
// let exclude = 40;
//for (let i = start; i <= end; i += start) if (i != exclude) console.log(i);

//10.2
// let start = 10;
// let end = 0;
// let stop = 3;
// for (let i = start; i >= end && i >= stop; i--)
//   i < start ? console.log("0" + i) : console.log("" + i);

//10.3
// let start = 1;
// let end = 6;
// let breaker = 2;
// for (let i = start; i <= end; i++)
//   console.log(i + "\n" + "-- " + breaker + "\n" + "-- " + (end - breaker));

//10.4
// let index = 10;
// let jump = 2;
// for (let i = index; i >= jump + jump; i -= jump) {
//   console.log(i);
// }

//10.5
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let cont = false;
// for (let i = +false; i < friends.length; i++)
//   if (friends[i].startsWith(letter.toUpperCase()) == false)
//     console.log(`${++cont} => ${friends[i]}`);

//10.6
// let start = 0;
// let swappedName = "elZerO";
// for (let i = start; i < swappedName.length; i++)
//   swappedName[i] == swappedName[i].toUpperCase()
//     ? swappedName[i].toLocaleLowerCase()
//     : swappedName[i].toUpperCase();
// console.log(swappedName);

//10.7
// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];
// for (let i = start; i < mix.length; ) {
//   if (!isNaN(mix[++i])) console.log(mix[i]);
// }
