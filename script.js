let myLibrary = [];
let cards = [];
const dialog = document.querySelector("#add-book");
const booksContainer = document.querySelector(".books-container");

var bookID = 0;

function init(){    
    displayBooks();
    toggleDialog();
    handleUserInput();
}

function Book(title, authorName, publishingDate) {
    this.title = title;
    this.authorName = authorName;
    this.publishingDate = publishingDate;
}

function addBookToLibrary(title, authorName, publishingDate) {
    if(myLibrary.length == 0){
        booksContainer.textContent = "";
    }
    const book = new Book(title, authorName, publishingDate);
    myLibrary.push(book);
}

function displayBooks(){
    for( var i = 0 ; i < myLibrary.length ; i++){
        booksContainer.appendChild(generateCard(myLibrary[i]));
    }
}

function generateCard(book){
    const bookCard = document.createElement('div');
    bookCard.classList.add("book-card");
    bookCard.setAttribute('id' , bookID)
    const titleP = document.createElement('p');
    const nameP = document.createElement('p');
    const dateP = document.createElement('p');

    titleP.textContent += "Title: " + book.title;
    nameP.textContent += "Author name: " + book.authorName;
    dateP.textContent += "Publishing date: " + book.publishingDate;

    bookCard.appendChild(titleP);
    bookCard.appendChild(nameP);
    bookCard.appendChild(dateP);

    const delBtn = document.createElement("button");
    delBtn.classList.add("del-btn");
    delBtn.addEventListener("click" , (event) =>{
        deleteCard(event);
    })
    delBtn.id = bookID++;

    delBtn.textContent = "Delete";
    bookCard.appendChild(delBtn);
    cards.push(bookCard);

    return bookCard;
}

function toggleDialog(){
    const dialogBtn = document.querySelector("#show-dialog");
    dialogBtn.addEventListener("click", () => {
        dialog.showModal();
    });
}

function handleUserInput(){
    const form = document.querySelector("#add-book > form");
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        formInputs = form.querySelectorAll('input');
        formValues = []
        formInputs.forEach(input => {
            formValues.push(input.value);
        });
        dialog.close();
        displayBook(formValues);
    });
    
}
    
function deleteCard(event){
    let bookID = event.target.id;
    for(let i = 0 ; i < cards.length ; i++){
        if (cards[i].id == bookID){
            booksContainer.removeChild(cards[i]);
            myLibrary.splice(i, 1);
            cards.splice(i,1);
        }
    }
    if (cards.length == 0){
        booksContainer.textContent = "No Books Added";
    }
    
}

function displayBook(bookData){
    addBookToLibrary(...bookData);
    booksContainer.appendChild(generateCard(myLibrary[myLibrary.length - 1]));
}

init()