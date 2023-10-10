//   Challenge 14
//   Browser Object Model - Video 114

//create Main Div
let mainDiv = document.createElement("div");
mainDiv.style.cssText =
  "background-color:#eee; padding: 10px 30px;display: flex;justify-content: space-between;align-items: center; margin: 20px auto; width:50%";
document.body.append(mainDiv);
//inpt field
let inptField = document.createElement("input");
inptField.setAttribute("type", "input");
inptField.setAttribute("placeholder", "Write Your Task : ");
inptField.style.cssText =
  "width: 85%;height: 30px;padding: 5px;font-size: 20px;";
mainDiv.append(inptField);
//add task button
let btnAdd = document.createElement("span");
btnAdd.style.cssText =
  "background-color: #f4573c;color: white;padding: 5px;font-size: 15px;cursor:pointer;width:10%;text-align:center";
btnAdd.textContent = "Add Task";
mainDiv.append(btnAdd);
//create the div to collect tasks
let divContainer = document.createElement("div");
divContainer.style.cssText =
  "background-color:#eee; padding: 10px 30px;margin: 20px auto; width:50%";
document.body.append(divContainer);
////start programming code
//when click add
btnAdd.onclick = function () {
  if (window.localStorage.getItem(inptField.value) != inptField.value)
    createTask(inptField.value);
  window.localStorage.setItem(inptField.value, inptField.value);
  inptField.value = "";
  removeTask();
};
if (window.localStorage.length >= 1) {
  for (let i = 0; i < window.localStorage.length; i++)
    createTask(Object.keys(window.localStorage)[i]);
  removeTask();
}
function removeTask() {
  let tasksLis = document.getElementsByClassName("delBtn");
  for (let i = 0; i < tasksLis.length; i++) {
    tasksLis[i].addEventListener("click", function () {
      this.parentElement.remove();
      window.localStorage.removeItem(this.previousSibling.textContent);
    });
  }
}
function createTask(str) {
  //create childs
  let chld = document.createElement("div");
  chld.classList.add("task");
  chld.style.cssText =
    "margin-bottom:10px;height: 30px;padding:5px 10px;font-size: 20px;background-color:white;display:flex;justify-content: space-between;";
  let txt = document.createElement("span");
  txt.textContent = str;
  txt.classList.add("TaskContent");
  chld.append(txt);
  //create btn delete
  let btndelete = document.createElement("span");
  btndelete.style.cssText =
    "display:inline-block;background-color: red;color: white;padding: 5px;font-size: 15px;cursor:pointer;text-align:center";
  btndelete.textContent = "Delete";
  btndelete.classList.add("delBtn");
  chld.append(btndelete);
  divContainer.append(chld);
}
