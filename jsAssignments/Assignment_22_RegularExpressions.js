// Assignment 22
// Regular Expressions from 134 - 146

//22.1
// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// let regEx = /\d{4}:\w{3}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/;
// console.log(ip.match(regEx));

//22.2
// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
// let regEx = /Os\d*O/gi;
// console.log(specialNames.match(regEx));// ['Os10O', 'OsO', 'Os100O']

//22.3
// let phone = "+(995)-123 (4567)";
// let regEx = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/gi;
// console.log(phone.match(regEx));

//22.4
//Need To Explaine This Regular Expression
// let willMatch = "https://wwe.elzero.com.net/answer";
// let regEx = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// //  https?      -> he will search for http or https
// //  \/\/        -> means characters //
// //  (?:         ->
// //  [-\w]+\.)?  -> - and any \w one or more and . all this zero or one
// // ([-\w]+)\.   -> - and any \w one or more then .
// // \w+          -> any \w one or more
// // (?:          ->
// // \.\w+)?      -> . and one or more \w all this zero or more
// // \/?.*        -> / one or more . one or more wild any chars
// // i flag       -> means case Insensitive
// console.log(willMatch.match(regEx));

//22.5
// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";
// let re = /25\s*\W*10\s*\W*1?9?82/gi; // Write Pattern Here
// console.log(date1.match(re)); // "25/10/1982"
// console.log(date2.match(re)); // "25 - 10 - 1982"
// console.log(date3.match(re)); // "25 10 1982"
// console.log(date4.match(re)); // "25 10 82"

//22.6
// Video - Challenge
// let url1 = "elzero.org";
// let url2 = "http://elzero.org";
// let url3 = "https://elzero.org";
// let url4 = "https://www.elzero.org";
// let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";
// let re =
//   /(https?:\/\/)?(www\.)?(\w+).(\w{3})(:?\d{4}\/\w+\.\w+\?\w+=\d+\&\w+=\w+)?/gi; // Write Your Pattern Here
// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));
