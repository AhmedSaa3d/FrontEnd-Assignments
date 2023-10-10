// Assignment 19
// Browser Object Model - 2 from 111 - 114

//19.1
// //there is another easy way to solve this assignment
// let frm = document.createElement("form");
// frm.style.cssText =
//   "display:flex;Justify-content:space-evenly;align-items:center;";
// document.body.append(frm);
// // Test Div
// let exp = document.createElement("div");
// exp.style.cssText =
//   "background-color: #333;width: 600px;height: 300px;margin: 20px auto;text-align : center;display: flex;justify-content: center;align-items: center;";
// exp.style.fontFamily = "roboto";
// exp.style.color = "red";
// exp.style.fontSize = "16px";
// exp.textContent = "This Is Div For Test";
// document.body.append(exp);
// // create box fonts 1
// let selectBoxFonts = document.createElement("select");
// selectBoxFonts.setAttribute("name", "fonts");
// selectBoxFonts.setAttribute("id", "fonts");
// let fontsNames = ["Roboto", "Cairo", "OpenSans"];
// for (let i = 0; i < fontsNames.length; i++) {
//   let fnt = document.createElement("option");
//   fnt.setAttribute("value", fontsNames[i]);
//   fnt.textContent = fontsNames[i] + " Font";
//   selectBoxFonts.append(fnt);
// }
// frm.append(selectBoxFonts);
// // create box colors
// let selectBoxColors = document.createElement("select");
// selectBoxColors.setAttribute("name", "colors");
// selectBoxColors.setAttribute("id", "colors");
// let colorsNames = ["Red", "Green", "Blue"];
// for (let i = 0; i < colorsNames.length; i++) {
//   let clr = document.createElement("option");
//   clr.setAttribute("value", colorsNames[i]);
//   clr.textContent = colorsNames[i] + " Color";
//   selectBoxColors.append(clr);
// }
// frm.append(selectBoxColors);
// //create box sizes
// let selectBoxFontSize = document.createElement("select");
// selectBoxFontSize.setAttribute("name", "fontSize");
// selectBoxFontSize.setAttribute("id", "fontSize");
// for (let i = 16; i <= 30; i++) {
//   let fontSize = document.createElement("option");
//   fontSize.setAttribute("value", i + "px");
//   fontSize.textContent = i;
//   selectBoxFontSize.append(fontSize);
// }
// frm.append(selectBoxFontSize);
// //default select
// for (let i = 0; i < document.forms[0].length; i++)
//   document.forms[0][i][0].selected = true;

// if (window.localStorage.getItem("fontFamily")) {
//   exp.style.fontFamily = localStorage.getItem("fontFamily");
//   for (let i = 0; i < selectBoxFonts.options.length; i++)
//     if (selectBoxFonts.options[i].value == localStorage.getItem("fontFamily"))
//       selectBoxFonts.options[i].selected = true;
// }
// if (window.localStorage.getItem("color")) {
//   exp.style.color = localStorage.getItem("color");
//   for (let i = 0; i < selectBoxColors.options.length; i++)
//     if (selectBoxColors.options[i].value == localStorage.getItem("color"))
//       selectBoxColors.options[i].selected = true;
// }
// if (window.localStorage.getItem("fontSize")) {
//   exp.style.fontSize = localStorage.getItem("fontSize");
//   for (let i = 0; i < selectBoxFontSize.options.length; i++)
//     if (selectBoxFontSize.options[i].value == localStorage.getItem("fontSize"))
//       selectBoxFontSize.options[i].selected = true;
// }

// // change the font
// selectBoxFonts.addEventListener("click", function (e) {
//   exp.style.fontFamily =
//     selectBoxFonts.options[selectBoxFonts.selectedIndex].value;
//   window.localStorage.setItem(
//     "fontFamily",
//     selectBoxFonts.options[selectBoxFonts.selectedIndex].value
//   );
// });
// // change the color
// selectBoxColors.addEventListener("click", function (e) {
//   exp.style.color =
//     selectBoxColors.options[selectBoxColors.selectedIndex].value;
//   window.localStorage.setItem(
//     "color",
//     selectBoxColors.options[selectBoxColors.selectedIndex].value
//   );
// });
// // change the fontSize
// selectBoxFontSize.addEventListener("click", function (e) {
//   exp.style.fontSize =
//     selectBoxFontSize.options[selectBoxFontSize.selectedIndex].value;
//   window.localStorage.setItem(
//     "fontSize",
//     selectBoxFontSize.options[selectBoxFontSize.selectedIndex].value
//   );
// });

//19.2
// let frm = document.createElement("form");
// frm.style.cssText =
//   "display:flex;Justify-content:space-evenly;align-items:center;";
// document.body.append(frm);

// let selectBox = document.createElement("select");
// selectBox.setAttribute("name", "names");
// selectBox.setAttribute("id", "names");
// let selectNames = ["Angular", "React", "Vue", "Node", "Jquery"];
// for (let i = 0; i < selectNames.length; i++) {
//   let nme = document.createElement("option");
//   nme.setAttribute("value", selectNames[i]);
//   nme.textContent = selectNames[i] + " Font";
//   selectBox.append(nme);
// }
// frm.append(selectBox);

// let inptNames = ["name", "password", "gender"];
// for (let i = 0; i < inptNames.length; i++) {
//   let crt = document.createElement("input");
//   crt.setAttribute("type", inptNames[i]);
//   crt.value = "";
//   crt.setAttribute("name", inptNames[i]);
//   crt.placeholder = "Enter Your : " + inptNames[i];
//   frm.append(crt);
// }

// let inpt = document.querySelectorAll("input");

// //change when reload
// if (window.sessionStorage.getItem("selectBox")) {
//   for (let i = 0; i < selectBox.options.length; i++)
//     if (selectBox.options[i].value == sessionStorage.getItem("selectBox"))
//       selectBox.options[i].selected = true;
// }

// for (let i = 0; i < inpt.length; i++) {
//   inpt[i].value = window.sessionStorage.getItem(inpt[i].name);
// }

// //add event listener
// selectBox.addEventListener("click", function (e) {
//   window.sessionStorage.setItem(
//     "selectBox",
//     selectBox.options[selectBox.selectedIndex].value
//   );
// });
// for (let i = 0; i < inpt.length; i++) {
//   inpt[i].addEventListener("blur", function () {
//     console.log(this.value);
//     window.sessionStorage.setItem(inpt[i].name, inpt[i].value);
//   });
// }
