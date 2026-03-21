const myLibrary = [];
const bookCollection = document.querySelector(".book-collection");
const newButton = document.querySelector("#new-book");
const closeButton = document.querySelector("#close-button");
const dialog = document.querySelector("#add-book");
const form = document.querySelector("form");

closeButton.addEventListener("click", addBook);

function Book(author, title, pages, status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary(int) {
    int.uuid = self.crypto.randomUUID();
    myLibrary.push(int);
}

Book.prototype.changeStatus = function(event) {
    const parentUUID = this.parentElement.parentElement.parentElement.dataset.bookId;
    const index = myLibrary.findIndex(book => book.uuid === parentUUID);
    if (myLibrary[index].status === "nr") {
        myLibrary[index].status = "r";
        this.parentElement.parentElement.querySelector(".status").textContent = "Read";
    } else {
        myLibrary[index].status = "nr";
        this.parentElement.parentElement.querySelector(".status").textContent = "Not Read";
    }
}

let hungerGames = new Book("Suzanne Collins", "The Hunger Games", "500", "r");
let testBook = new Book("Cool Author", "Cool Book", "1000", "nr");
let mazeRunner = new Book("James Dashner", "The Maze Runner", "416", "r");
let artOfWar = new Book("Sun Tzu", "The Art of War", "200", "nr");

addBookToLibrary(hungerGames);
addBookToLibrary(testBook);
addBookToLibrary(mazeRunner);
addBookToLibrary(artOfWar);

function displayBooks(array) {
    array.forEach(function eachBook(book) {
        if (Object.hasOwn(book, "displayed")) {
            return;
        } else {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.bookId = book.uuid;
        bookCollection.appendChild(card);

        const cardTitle = document.createElement("h2");
        cardTitle.textContent = `${book.title}`;
        card.appendChild(cardTitle);

        const cardAuthor = document.createElement("h3");
        cardAuthor.textContent = `${book.author}`;
        card.appendChild(cardAuthor);

        const cardPages = document.createElement("p");
        cardPages.textContent = `${book.pages} pages`;
        card.appendChild(cardPages);

        const bottom = document.createElement("div");
        bottom.classList.add("bottom");
        card.appendChild(bottom);

        const cardStatus = document.createElement("p");
        cardStatus.classList.add("status");
        if (book.status === "nr") {
            cardStatus.textContent = "Not Read";
        } else {
            cardStatus.textContent = "Read"
        }
        bottom.appendChild(cardStatus);

        const buttons = document.createElement("div");
        buttons.classList.add("button-container");
        bottom.appendChild(buttons);

        const statusButton = document.createElement("button");
        statusButton.textContent = "Change read status";
        buttons.appendChild(statusButton);
        statusButton.addEventListener("click", book.changeStatus);

        const cardButton = document.createElement("button");
        cardButton.textContent = "Remove Book";
        buttons.appendChild(cardButton);
        cardButton.addEventListener("click", removeBook);

        book.displayed = 'yes';
        }
    }, this)
}

displayBooks(myLibrary);

function addBook(event) {
    event.preventDefault();
    const bookInfo = document.querySelectorAll("input");
    let newBook = new Book(`${bookInfo[1].value}`, `${bookInfo[0].value}`, `${bookInfo[2].value}`, `nr`);
    addBookToLibrary(newBook);
    displayBooks(myLibrary);
    dialog.close();
    form.reset();
}

function removeBook(event) {
    const pElement = this.parentElement.parentElement.parentElement;
    const parentUUID = pElement.dataset.bookId;
    const index = myLibrary.findIndex(book => book.uuid === parentUUID);
    myLibrary.splice(index, 1);
    pElement.remove();
}
