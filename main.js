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

let colors = document.querySelectorAll('img');

colors.forEach(function (color) {
  color.addEventListener("click", function() {
    color.classList.add("checked");
  });
});



