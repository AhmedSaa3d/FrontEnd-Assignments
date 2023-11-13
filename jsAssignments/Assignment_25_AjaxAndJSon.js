// Assignment 25
// Ajax And JSON from 169 - 178

// //25.1
// //create articles.json contain id,writer,category,title,content

// //25.2
// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "jsAssignments/articles.json");
// myRequest.send();

// myRequest.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(myRequest);
//     console.log("Data Loaded");
// //25.3
//     let jsData = JSON.parse(this.responseText);
//     for (let i = 0; i < jsData.length; i++) jsData[i].category = "All";
//     console.log(jsData);
//     let updatedData = JSON.stringify(jsData);
//     console.log(updatedData);
// //25.4
//     let data = document.createElement("div");
//     data.id = "data";
//     for (let i = 0; i < jsData.length; i++) {
//       let div = document.createElement("div");
//       let h2 = document.createElement("h2");
//       h2.textContent = jsData[i].title;
//       let p1 = document.createElement("p");
//       p1.textContent = jsData[i].body;
//       let p2 = document.createElement("p");
//       p2.textContent = `Author: ${jsData[i].writer}`;
//       let p3 = document.createElement("p");
//       p3.textContent = `Category: ${jsData[i].category}`;
//       div.appendChild(h2);
//       div.appendChild(p1);
//       div.appendChild(p2);
//       div.appendChild(p3);
//       data.appendChild(div);
//     }
//     document.body.prepend(data);
//   }
// };
