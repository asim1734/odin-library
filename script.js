const myLibrary = [];
const dialog = document.querySelector("#add-book");

function init(){    
    addBookToLibrary("hello", "hi ", "23");
    addBookToLibrary("hi", "je;p", "er");
    displayBooks();
    toggleDialog();
    getFormData();

}

function Book(title, authorName, publishingDate) {
    this.title = title;
    this.authorName = authorName;
    this.publishingDate = publishingDate;
}

function addBookToLibrary(title, authorName, publishingDate) {
  const book = new Book(title, authorName, publishingDate);
  myLibrary.push(book);
}

function displayBooks(){
    const booksContainer = document.querySelector(".books-container");
    for( var i = 0 ; i < myLibrary.length ; i++){
        booksContainer.appendChild(generateCard(myLibrary[i]));
    }
}

function generateCard(book){
    const bookCard = document.createElement('div');
    bookCard.classList.add("book-card");

    const titleP = document.createElement('p');
    const nameP = document.createElement('p');
    const dateP = document.createElement('p');

    titleP.textContent += "Title: " + book.title;
    nameP.textContent += "Author name: " + book.authorName;
    dateP.textContent += "Publishing date: " + book.publishingDate;

    bookCard.appendChild(titleP);
    bookCard.appendChild(nameP);
    bookCard.appendChild(dateP);

    return bookCard;
}

function toggleDialog(){
    const dialogBtn = document.querySelector("#show-dialog");
    dialogBtn.addEventListener("click", () => {
        console.log("clcl");
        dialog.showModal();
    });
}

function getFormData(){
    const form = document.querySelector("#add-book > form");
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        formInputs = form.querySelectorAll('input');
        formValues = []
        formInputs.forEach(input => {
            formValues.push(input.value);
        });
        console.log(formValues);
        dialog.close();
        console.log('Form submitted');
    });
}

init()