// Assignment 16
// Document Object Model - 1 from 86 - 93

//16.1
// //    <div id="elzero" class="element" name="js">JavaScript</div>
// let way_1 = document.body.children[0];
// let way_2 = document.body.childNodes[1];
// let way_3 = document.body.firstElementChild;
// let way_4 = document.body.firstChild.nextSibling;
// let way_5 = document.body.childNodes[0].nextSibling;
// let way_6 = document.getElementById("elzero");
// let way_7 = document.getElementsByClassName("element")[0];
// let way_8 = document.getElementsByName("js")[0];
// let way_9 = document.getElementsByTagName("div")[0];
// let way_10 = document.getElementsByTagNameNS(
//   "http://www.w3.org/1999/xhtml",
//   "div"
// )[0];
// let way_11 = document.querySelector("#elzero");
// let way_12 = document.querySelector(".element");
// let way_13 = document.querySelector("[name='js']");
// let way_14 = document.querySelectorAll(".element")[0];
// let way_15 = document.querySelectorAll("[name='js']")[0];
// console.log(way_1);
// console.log(way_2);
// console.log(way_3);
// console.log(way_4);
// console.log(way_5);
// console.log(way_6);
// console.log(way_7);
// console.log(way_8);
// console.log(way_9);
// console.log(way_10);
// console.log(way_11);
// console.log(way_12);
// console.log(way_13);
// console.log(way_14);
// console.log(way_15);

//16.2
// for (let i = 0; i < document.images.length; i++) {
//   let ele = document.images[i];
//   ele.setAttribute(
//     "src",
//     "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
//   );
//   ele.setAttribute("alt", "Elzero Logo");
// }
//output
// <div>
//  <img decoding="async" src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png" alt="Elzero Logo">
//  </div>

//16.3
// //  <form action="">
// //   <input type="number" name="dollar" placeholder="USD Dollar" />
// //   <div class="result">{0} USD Dollar = {0} Egyptian Pound</div>
// // </form>
// let ele = document.forms[0];
// let inptField = document.forms[0][0];
// let resultDv = document.getElementsByClassName("result")[0];
// ele.addEventListener("click", ansFunc);
// ele.addEventListener("keydown", ansFunc);
// ele.addEventListener("keyup", ansFunc);
// function ansFunc() {
//   resultDv.textContent = `{${inptField.value}} USD Dollar = {${(
//     inptField.value / 15.6
//   ).toFixed(2)}} Egyptian Pound`;
// }

//16.4
// let dv1 = document.getElementsByClassName("one")[0];
// let dv2 = document.getElementsByClassName("two")[0];
// //change the title first
// let tmp = dv1.getAttribute("title");
// dv1.setAttribute("title", dv2.getAttribute("title"));
// dv2.setAttribute("title", tmp);
// //change the div content
// tmp = dv1.textContent;
// dv1.textContent = dv2.textContent;
// dv2.textContent = tmp + " " + document.getElementsByTagName("div").length;

//16.5
// //  <img decoding="async" src="#" alt="One" />
// // <img decoding="async" src="#" />
// // <img decoding="async" src="#" alt="Three" />
// // <img decoding="async" src="#" />
// //<img decoding="async" src="#" />

// let imgs = document.images;
// for (let i = 0; i < imgs.length; i++) {
//   if (imgs[i].hasAttribute("alt")) imgs[i].setAttribute("alt", "Old");
//   else imgs[i].setAttribute("alt", "Elzero New");
// }

//16.6
// // <form action="">
// // <input type="number" name="elements" class="input" placeholder="Number Of Elements" />
// // <input type="text" name="texts" class="input" placeholder="Elements Text" />
// // <select name="type" class="input">
// //   <option value="Div">Div</option>
// //   <option value="Section">Section</option>
// // </select>
// // <input type="submit" name="create" value="Create" />
// // <div class="results"></div>
// // </form>

// let eleNum = document.getElementsByClassName("input")[0];
// let eleText = document.getElementsByClassName("input")[1];
// let eleType = document.getElementsByClassName("input")[2];
// let reslt = document.getElementsByClassName("results")[0];

// document.forms[0].onsubmit = function () {
//   reslt.remove(); //remove the old data
//   reslt = document.createElement("results");
//   reslt.setAttribute("class", "results");
//   document.forms[0].append(reslt);
//   reslt.style.cssText = "display:flex;justify-content: center;";

//   for (let i = 0; i < eleNum.value; i++) {
//     let ele;
//     if (eleType === "Div") ele = document.createElement("div");
//     else ele = document.createElement("section");

//     ele.setAttribute("class", "box");
//     ele.setAttribute("title", "Element");
//     ele.setAttribute("id", "id-" + (i + 1));
//     ele.textContent = eleText.value;
//     ele.style.cssText =
//       "color:white;background:#2ecc71;padding:5px;margin-right:5px;text-align:center";
//     reslt.append(ele);
//   }
//   return false; //prevent the submission
// };
