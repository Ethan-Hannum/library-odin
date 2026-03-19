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
let testBook = new Book("Cool Author", "Cool Book", "1000", "nr");
let mazeRunner = new Book("James Dashner", "The Maze Runner", "416", "r");
let artOfWar = new Book("Sun Tzu", "The Art of War", "200", "nr");

addBookToLibrary(hungerGames);
addBookToLibrary(testBook);
addBookToLibrary(mazeRunner);
addBookToLibrary(artOfWar);

function displayBooks(array) {
    array.forEach(function eachBook(book) {
        const card = document.createElement("div");
        card.classList.add("card");
        bookCollection.appendChild(card);

        const cardTitle = document.createElement("h2");
        cardTitle.textContent = `${book.title}`;
        card.appendChild(cardTitle);

        const cardAuthor = document.createElement("h3");
        cardAuthor.textContent = `${book.author}`;
        card.appendChild(cardAuthor);

        const cardPages = document.createElement("p");
        cardPages.textContent = `${book.pages}`;
        card.appendChild(cardPages);

        const cardStatus = document.createElement("p");
        cardStatus.textContent = `${book.status}`;
        card.appendChild(cardStatus);
    }, this)
}

displayBooks(myLibrary);