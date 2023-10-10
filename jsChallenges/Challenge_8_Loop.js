//   Challenge 8
//   Loop - Video 56

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmpolyees = [
  "Amgad",
  "Sameh",
  "Ammer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];
document.write(`<div> We Have X Admins </div>`);
let cont = 0;
for (let i = 0; i < myAdmins.length; i++, cont++)
  if (myAdmins[i] === "Stop") break;
document.write(`<div> We Have ${cont} Admins </div>`);
let contmem = 1;
for (let i = 0; i < cont; i++) {
  document.write(`<hr>`);
  document.write(`The Admin For Team ${i + 1} Is ${myAdmins[i]}`);
  document.write(`<h2>Team Members</h2>`);
  contmem = 1;
  for (let j = 0; j < myEmpolyees.length; j++)
    if (myAdmins[i][0] === myEmpolyees[j][0])
      document.write(`<p>- ${contmem++} ${myEmpolyees[j]}</p>`);
}
