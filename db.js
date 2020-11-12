// let localStorageNotesKey = 'notes';
export default class Db {
    constructor() {
        this.notesKey = 'notes'
    };
    save(notes) {
        console.log(notes);
        //tablica zapisana w localStorage i zminiona ma stringa
        localStorage.setItem(this.notesKey, JSON.stringify(notes));

    }
    get() {

        //odczytanie tablicy notatek z localStorage
        let notes = JSON.parse(localStorage.getItem(this.notesKey));
        //return localStorage.getItem(this.notesKey)

        return notes;
    }
}