const myLibrary = [];


const OpenAddModal = document.querySelector('#add_button');
const CloseAddModal = document.querySelector('#add_book_cancel');
const AddBookModal = document.querySelector('.add_book_dialog');
const SubmitNewBook = document.querySelector('#add_book_submit');
const BookTitle = document.querySelector('#book_title');
const BookGenre = document.querySelector('#book_genre');
const BookAuthor = document.querySelector('#book_author');
const BookPages = document.querySelector('#book_pages');
/* const BookStatus = document.querySelector('input[type="radio"][name="status"]:checked'); */
const BookRating = document.querySelector('#book_rating');
const BookCover = document.querySelector('#book_cover')

// Add book modal
OpenAddModal.addEventListener('click', () => {
    AddBookModal.showModal();
}); 
AddBookModal.addEventListener('click', e =>{
    const dialogDimensions = AddBookModal.getBoundingClientRect()
    if(
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        AddBookModal.close();
      }
    }
);
CloseAddModal.addEventListener('click',() =>{
    AddBookModal.close();
});



// Delete book modal
// Still thikning how to do this

function Book(title, genre, author, pages, /* status, */ rating, cover){
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.rating = rating;
    this.cover = cover;
}

function addBookToLibrary(){
    let title = BookTitle.value;
    let genre = BookGenre.value;
    let author = BookAuthor.value;
    let pages = BookPages.value;
    /* let status = BookStatus.value; */
    let rating = BookRating.value;
    let cover = BookCover.value;

    let newBook = new Book(title, genre, author, pages, /* status,*/ rating, cover);
    myLibrary.push(newBook);
}
SubmitNewBook.addEventListener('click',() =>{
    addBookToLibrary();
});