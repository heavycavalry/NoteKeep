export default class Note { //commit
    constructor(title, description, pinned, color) {
        this.title = title;
        this.text = description;
        this.createDate = new Date();
    }
}