import Db from './db.js'
import Note from './note.js'
import Notes from './notes.js'
console.log("main")

let db = new Db();
db.get();

let notes = new Notes();


let closeBtn = document.getElementById("closeIcon");
let newNoteBtn = document.getElementById("newBtn");
let popUpBtn = document.getElementById("popupBtn");

newNoteBtn.addEventListener("click", openPopUp);
closeBtn.addEventListener("click", closePopUp);
popUpBtn.addEventListener("click", submit);


function openPopUp() {
  document.getElementById("popup").style.display = "flex";
}

function closePopUp() {
  document.getElementById("popup").style.display = "none";
}

function submit() {
  let noteTitle = document.getElementById("noteTitle");
  let noteContent = document.getElementById("noteContent");
  let title = noteTitle.value;
  let content = noteContent.value;
  let note = new Note(title, content);
  notes.addNote(note);
}


// let n = document.querySelectorAll('closeIcons');

// n.forEach(function (icon) {
//   icon.addEventListener("click", function () {
//     thisnote = icon.parentElement;
//     removeNote(thisnote);
//   });
// });


const select = document.querySelector("select");
const note = document.querySelector("note");

select.style.border = "thick solid #ff5252";
select.style.color = "black";

select = onchange = function () {
  const choice = select.value;

  switch (choice) {
    case "red":
      update("#ff5252");
      break;
    case 'yellow':
      update("#ebe85d");
      break;
    case 'purple':
      update("#b367e6");
      break;
    case 'blue':
      update("#6d6dec");
      break;
  }
}

function update(color) {
  select.style.border = `thick solid ${color}`;
}