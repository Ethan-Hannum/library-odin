const myLibrary = [];
const bookCollection = document.querySelector(".book-collection");

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

let hungerGames = new Book("Suzanne Collins", "The Hunger Games", "500", "r");
let testBook = new Book("Cool Author", "Cool Book", "1000", "nr")

addBookToLibrary(hungerGames);
addBookToLibrary(testBook);

function displayBooks() {
    myLibrary.forEach(function eachBook(book) {
        const card = document.createElement("div");
        card.classList.add("card");
        bookCollection.appendChild(card);

        const cardTitle = document.createElement("h2");
        cardTitle.textContent = `${book.title}`;
        card.appendChild(cardTitle);
    }, this)
}

displayBooks();