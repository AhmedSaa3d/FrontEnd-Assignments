//  Challenge 1
//  Templte literals - Video 17

let title = "Elzero",
  description = "Elzero Web School",
  Date = "25/10";
let otpt = `<div class="card">
            <h3>Hello ${title}</h3>
            <p>${description}</p>
            <span>${Date}</span>
            </div>`;
document.write(otpt.repeat(4));
