// Assignment 17
// Document Object Model - 2 from 94 - 101

//17.1
//Answer in Html file
/* <a class="open" href="https://google.com" target="_blank" onclick="check(this,event)">Google</a>
<a class="open" href="https://elzero.org" target="_blank" onclick="check(this,event)">Elzero</a>
<a class="not" href="https://facebook.com" target="_blank" onclick="check(this,event)">Facebook</a>
<a class="linked" href="https://linkedin.com" target="_blank" onclick="check(this,event)">Elzero</a>
<script>
function check(ele,evt){
  if (
!(
  ele.classList.contains("open") === true &&
  ele.textContent === "Elzero"
)
)
event.preventDefault(); // Prevent the default link behavior
}
</script> */

//17.2
{
  //Html code
  /* <div class="assign">
<input type="text" class="classes-to-add" placeholder="Add Classes" />
<input type="text" class="classes-to-remove" placeholder="Remove Classes" />
<div class="element current" title="Current">Current Element</div>
<div class="classes-list">
  <h5>Current Element Class Lists</h5>
  <div></div>
</div>
</div> */
}

/*
let inptClassAdd = document.getElementsByClassName("classes-to-add")[0];
let inptClassRemove = document.getElementsByClassName("classes-to-remove")[0];
let dvClassAddRemove =
  document.getElementsByClassName("classes-list")[0].lastElementChild;

function DisplayArrinDiv() {
  dvClassAddRemove.textContent = "";
  let allClasses = dvClassAddRemove.getAttribute("class").split(" ").sort();
  for (let i = 0; i < allClasses.length; i++)
    dvClassAddRemove.textContent += " " + allClasses[i];
}

inptClassAdd.onblur = function () {
  if (inptClassAdd.value.trim() != "") {
    let classesAdd = inptClassAdd.value
      .trimStart()
      .trimEnd()
      .toLowerCase()
      .split(" ")
      .sort();
    for (let i = 0; i < classesAdd.length; i++)
      if (dvClassAddRemove.classList.contains(classesAdd[i]) !== true)
        dvClassAddRemove.classList.add(classesAdd[i]);

    DisplayArrinDiv();
  }
  inptClassAdd.value = "";
};

inptClassRemove.onblur = function () {
  if (inptClassRemove.value.trim() != "") {
    let classesRemove = inptClassRemove.value
      .trimStart()
      .trimEnd()
      .toLowerCase()
      .split(" ")
      .sort();
    for (let i = 0; i < classesRemove.length; i++) {
      if (dvClassAddRemove.classList.contains(classesRemove[i]) === true)
        dvClassAddRemove.classList.remove(classesRemove[i]);
    }
    DisplayArrinDiv();
  }
  inptClassRemove.value = "";
};
*/

//17.3
// let mainDiv = document.getElementsByClassName("our-element")[0];
// mainDiv.nextElementSibling.remove(); //remove next p

// let strDv = document.createElement("div");
// strDv.setAttribute("class", "start");
// strDv.setAttribute("title", "Start Element");
// strDv.setAttribute("data-value", "Start");
// strDv.textContent = "Start";

// let endDv = document.createElement("div");
// endDv.setAttribute("class", "End");
// endDv.setAttribute("title", "End Element");
// endDv.setAttribute("data-value", "End");
// endDv.textContent = "End";

// mainDiv.before(strDv);
// mainDiv.after(endDv);

//17.4
// console.log(
//   document.getElementsByTagName("div")[0].lastChild.textContent.trim()
// );

//17.5
// document.addEventListener("click", function (e) {
//   console.log(e.target.tagName);
// });
