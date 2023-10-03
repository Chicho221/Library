const myLibrary = [
    Book[0]= {
        title: 'Harry Potter',
        genre: 'Fantasy',
        author: 'JK',
        pages: 233,
        status: 'Finished',
        rating: 3,
        cover: ''
    },
    Book[1]= {
        title: 'Harry Potter',
        genre: 'Fantasy',
        author: 'JK',
        pages: 11,
        status: 'Finished',
        rating: 3,
        cover: ''
    }
];


const OpenAddModal = document.querySelector('#add_button');
const CloseAddModal = document.querySelector('#add_book_cancel');
const AddBookModal = document.querySelector('.add_book_dialog');
const SubmitNewBook = document.querySelector('#add_book_submit');
const BookTitle = document.querySelector('#book_title');
const BookGenre = document.querySelector('#book_genre');
const BookAuthor = document.querySelector('#book_author');
const BookPages = document.querySelector('#book_pages');
const BookStatus = document.getElementsByName('status');
const BookRating = document.querySelector('#book_rating');
const BookCover = document.querySelector('#book_cover')
const CardContainer = document.querySelector('.card_container')

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

function Book(title, genre, author, pages, status, rating, cover){
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
    let status = getBookStatus();
    let rating = BookRating.value;
    let cover = BookCover.value;

    let newBook = new Book(title, genre, author, pages, status, rating, cover);
    myLibrary.push(newBook);
}
SubmitNewBook.addEventListener('click',() =>{
    addBookToLibrary();
    ResetBookContainer();
    DisplayCards();
});

//NOTES TO SELF... Figure out how to get status value
function getBookStatus(){ //Get book status from modal
    for(i = 0; i < BookStatus.length; i++){
        if(BookStatus[i].checked){
            return BookStatus[i].value;
        }
    }
}

function DisplayCards(){
    for(i = 0;i < myLibrary.length; i++){
        let card = document.createElement('div');
        card.classList.add('card');
            let bookinfo = document.createElement('div');
            bookinfo.classList.add('book_info');
                let title = document.createElement('div');
                 title.classList.add('title')
                 title.textContent= myLibrary[i].title;
                let genre = document.createElement('div');
                 genre.classList.add('genre')
                 genre.textContent= 'Genre: ' + myLibrary[i].genre;
                let author = document.createElement('div');
                 author.classList.add('author')
                 author.textContent='Author: ' + myLibrary[i].author;
                let pages = document.createElement('div');
                 pages.classList.add('pages')
                 pages.textContent='Pages: ' + myLibrary[i].pages;
                let status = document.createElement('div');
                 status.classList.add('status')
                 status.textContent='Status: ' + myLibrary[i].status;
                let rating = document.createElement('div');
                 rating.classList.add('rating')
                 rating.textContent=myLibrary[i].rating + '/5';
            let bookcover = document.createElement('div');
            bookcover.classList.add('book_cover');
             bookcover.textContent = myLibrary[i].cover;
            let cardmenu = document.createElement('div');
             cardmenu.classList.add('card_menu');
                let deletebutton = document.createElement('button');
                 deletebutton.classList.add('delete_card');
                    let deleteicon = document.createElement('img');
                     deleteicon.classList.add('icon');
                     deleteicon.src = "icon/cross-white.svg";
                    let editicon = document.createElement('img');
                     editicon.classList.add('icon');
                     editicon.src = "icon/pencil-white.svg";
                let editbutton = document.createElement('button');
                 editbutton.classList.add('edit_card');

        card.appendChild(bookinfo)
            bookinfo.appendChild(title)
            bookinfo.appendChild(genre)
            bookinfo.appendChild(author)
            bookinfo.appendChild(pages)
            bookinfo.appendChild(status)
            bookinfo.appendChild(rating)
        card.appendChild(bookcover)
        card.appendChild(cardmenu)
            cardmenu.appendChild(deletebutton)
                deletebutton.appendChild(deleteicon)
            cardmenu.appendChild(editbutton)
                editbutton.appendChild(editicon)

        CardContainer.appendChild(card);
    }
}

window.addEventListener('load',() =>{
    DisplayCards();
})

function ResetBookContainer(){
    CardContainer.innerHTML = '';
}