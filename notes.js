import Db from './db.js'
import Note from './note.js';
export default class Notes {

    constructor() {
        this.notes = []
        this.db = new Db();

    }

    loadNotesFromDb() {

    }

    createNote(title, text) {
        let select = document.querySelector("select");
        let color = select.value;
        let table = document.getElementById("notes");
        const div = document.createElement("div.note");
        div.innerHTML = 
        `<div class="note" style="background-color: ${color};">
            <i class="fa fa-times closeIcons"></i>
            <h2 class="title">${title}</h2>
            <p class="text">${text}</p>
        </div>`
        table.appendChild(div);
    }


    addNote(note) {
        this.createNote(note.title, note.text);
        this.notes.push(note);
        this.db.save(this.notes);
    }

    removeNote(note) {
        this.notes.map();
    }
    
    getNotes() {
        return this.notes;
    }

    getNote(id) {
        return this.notes.find(el => el.id === id)
    }
}


console.log("notes")
// const notesObj = new Notes();
// const notesArr = notesObj.getNotes();
// const newNote = new Note('asd')
// notesArr.addNote(newNote);

// someButton.addEventListener('click', (ev) => {
//     const id = ev.target.id
//     notesObj.removeNote(id);
// })