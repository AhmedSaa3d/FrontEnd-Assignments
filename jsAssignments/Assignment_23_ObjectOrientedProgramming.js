// Assignment 23
// Object Oriented Programming from 147 - 158

//23.1
// class Car {
//   constructor(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
//   }
//   sayRun() {
//     console.log("Car Is Running Now");
//   }
//   sayStop() {
//     console.log("Car Is Stopped");
//   }
// }
// let CarOne = new Car("MG", 2022, 420000);
// let CarTwo = new Car("Nissan", 2020, 500000);
// let CarThree = new Car("Jeep", 2019, 150000);
// console.log(
//   `Car One Name IS ${CarOne.n} And Model IS ${CarOne.m} And Price Is ${CarOne.p}`
// );
// CarOne.sayRun();

//23.2
// class Phone {
//   constructor(name, serial, price) {
//     this.name = name;
//     this.serial = serial;
//     this.price = price;
//   }
// }
// class Tablet extends Phone {
//   constructor(name, serial, price, size) {
//     super(name, serial, price);
//     this.size = size || "Unknown";
//   }
//   fullDetails() {
//     return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
//   }
// }
// let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
// let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
// let TabletThree = new Tablet("LG", 250450650, 650);
// console.log(`${TabletOne.fullDetails()}`); // iPad Serial is 100200300 And Size Is 12.9
// console.log(`${TabletTwo.fullDetails()}`); // Nokia Serial is 350450650 And Size Is 10.5
// console.log(`${TabletThree.fullDetails()}`); // LG Serial is 250450650 And Size Is Unknown

//23.3
// // Edit The Class
// class User {
//   #c;
//   constructor(username, card) {
//     this.u = username;
//     this.#c = card;
//   }
//   get showData() {
//     return `Hello ${this.u} Your Card Number Is ${this.editCard()}`;
//   }
//   editCard() {
//     let newCard = new String(this.#c);
//     let regEx = /\d{4}/gi;
//     const result = newCard.match(regEx);
//     return result.join("-");
//   }
// }

// // Do Not Edit Anything Below
// let userOne = new User("Osama", "1234-5678-1234-5678");
// let userTwo = new User("Ahmed", "1234567812345678");
// let userThree = new User("Ghareeb", 1234567812345678);

// console.log(userOne.showData);
// // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
// console.log(userTwo.showData);
// // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
// console.log(userThree.showData);
// // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
// console.log(userOne.c); // Prevent Accessing To Card Property Here
// // Undefined

//23.4
// Object.prototype.addLove = function () {
//   return `I Love ${this} Web School`;
// };
// // Do Not Edit Below
// let myStr = "Elzero";
// console.log(myStr.addLove()); // I Love Elzero Web School

//23.5
// const myObj = {
//   username: "Elzero",
//   id: 100,
//   score: 1000,
//   country: "Egypt",
// };

// // Write Your Code Here
// Object.defineProperties(myObj, {
//   score: {
//     writable: false,
//   },
//   id: {
//     enumerable: false,
//   },
//   country: {
//     enumerable: false,
//     get: function () {
//       return null;
//     },
//   },
// });

// myObj.score = 500;

// for (let prop in myObj) {
//   console.log(`${prop} => ${myObj[prop]}`);
// }

// console.log(myObj);

// // Needed Output
// //   "username => Elzero"
// //   "score => 1000"
// //   {username: 'Elzero', score: 1000, id: 100}
