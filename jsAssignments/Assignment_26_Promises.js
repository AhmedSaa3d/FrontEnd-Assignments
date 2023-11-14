// Assignment 26
// Promises from 179 - 188

//26.1
// const getData = (apiLink) => {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.open("GET", apiLink);
//     myRequest.send();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200)
//         resolve(JSON.parse(this.responseText));
//       else reject(Error("NO Data Found"));
//     };
//   });
// };
// getData("jsAssignments/articlesPromise.json")
//   .then((result) => {
//     for (let i = 0; i < 5; i++) createArticle(result[i]);
//   })
//   .catch((rej) => console.log(rej));

//26.2
// fetch("jsAssignments/articlesPromise.json")
//   .then((result) => {
//     return result.json();
//   })
//   .then((objs) => {
//     for (let i = 0; i < 5; i++) createArticle(objs[i]);
//   })
//   .catch((rej) => console.log(rej));

// function createArticle(obj) {
//   let dv = document.createElement("div");
//   let h3 = document.createElement("h3");
//   h3.textContent = obj.title;
//   let p = document.createElement("p");
//   p.textContent = obj.description;
//   dv.append(h3, p);
//   document.body.appendChild(dv);
// }
