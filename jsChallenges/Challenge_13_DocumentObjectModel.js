//   Challenge 13
//   Document Object Model  - Video 101

//start body
document.body.style.cssText =
  "margin: 0px; background-color: rgb(236,236,236); font-family: Tahoma, Arial;";
//Start nav bar
let header = document.createElement("header");
header.classList.add("website-head");
header.style.cssText =
  "display: flex; padding: 20px; background-color: rgb(255,255,255); justify-content: space-between; align-items: center;";
let logo = document.createElement("div");
logo.classList.add("logo");
logo.setAttribute("title", "Website Logo");
logo.style.cssText =
  "font-weight: bold; color: rgb(35,169,110); font-size: 26px;cursor: pointer;";
logo.textContent = "ElSa3d";
let uList = document.createElement("ul");
uList.classList.add("menu");
uList.style.cssText =
  "padding: 0px; margin: 0px; display:flex; list-styled: none;";
let uListItems = ["Home", "About", "Services", "Contact"];
for (let i = 0; i < uListItems.length; i++) {
  let newItem = document.createElement(uListItems[i]);
  newItem.textContent = uListItems[i];
  newItem.style.cssText =
    "padding: 10px; cursor: pointer; color: rgb(35,169,110)";
  uList.append(newItem);
}
header.append(logo);
header.append(uList);
document.body.append(header);
//Start Content
let content = document.createElement("div");
content.classList.add("content");
content.style.cssText =
  "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center;align-items: center ;gap: 20px; min-height: calc(100vh - 163px);";
// create 15 products
for (let i = 1; i <= 16; i++) {
  let product = document.createElement("div");
  product.classList.add("product");
  product.style.cssText =
    "padding: 20px; background-color: white; border: 1px solid rgb(221,221,221); width: calc((100% - 40px) / 5); box-sizing: border-box; text-align: center; color: rgb(136,136,136);border-radius: 6px;";
  let spn = document.createElement("span");
  spn.style.cssText =
    "font-size: 40px; color: black; font-weight: normal; display: block; margin-bottom: 10px; margin-top: 10pxx;";
  spn.textContent = i;
  let prd = document.createTextNode("Product");
  product.append(spn);
  product.append(prd);
  content.append(product);
}
document.body.append(content);
//start footer
let fter = document.createElement("footer");
fter.classList.add("footer");
fter.style.cssText =
  "background-color: rgb(35,169,110); font-size: 20px; text-align: center; padding: 10px; color: rgb(236,236,236);";
fter.append(document.createTextNode("Copyright @2023"));
document.body.append(fter);
