const myLibrary = [
    Book[0]= {
        title: 'Harry Potter',
        genre: 'Fantasy',
        author: 'JK',
        pages: 233,
        status: 'Finished',
        cover: ''
    },
    Book[1]= {
        title: 'Harry Potter',
        genre: 'Fantasy',
        author: 'JK',
        pages: 123,
        status: 'Reading',
        cover: ''
    },
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
const BookCover = document.querySelector('#book_cover');
const CardContainer = document.querySelector('.card_container');
const AddForm = document.querySelector('.add_form');

// Add book modal
OpenAddModal.addEventListener('click', () => {
    AddBookModal.showModal();
}); 
AddBookModal.addEventListener('click', e =>{ //Checks if user clicked outside modal
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
// Create book function
function Book(title, genre, author, pages, status, cover){
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.cover = cover;
}
// Add book to array
function addBookToLibrary(e){
    e.preventDefault();
    let title = BookTitle.value;
    let genre = BookGenre.value;
    let author = BookAuthor.value;
    let pages = BookPages.value;
    let status = getBookStatus();
    let cover = BookCover.value;

    let newBook = new Book(title, genre, author, pages, status, cover);
    myLibrary.push(newBook);
    Reload();
    AddBookModal.close()
}
AddForm.addEventListener('submit', addBookToLibrary);

function getBookStatus(){ //Gets book status from modal
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
        card.setAttribute('id', i);
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
            let bookcover = document.createElement('div');
            bookcover.classList.add('book_cover');
             bookcover.setAttribute("style", `background-image: url('${myLibrary[i].cover}')`)
            let cardmenu = document.createElement('div');
             cardmenu.classList.add('card_menu');
                let deletebutton = document.createElement('button');
                 deletebutton.classList.add('delete_card');
                 deletebutton.setAttribute('title', 'Delete');
                  deletebutton.addEventListener('click',() => {
                    DeleteBook(card.id);
                  })
                    let deleteicon = document.createElement('img');
                     deleteicon.classList.add('icon');
                     deleteicon.src = "icon/cross-white.svg";
                    let editicon = document.createElement('img');
                     editicon.classList.add('icon');
                     editicon.src = "icon/pencil-white.svg";
                let editbutton = document.createElement('button');
                 editbutton.classList.add('edit_card');
                 editbutton.setAttribute('title', 'Change Status')
                 editbutton.addEventListener('click',() =>{
                    StatusChange(card.id);
                 });

        card.appendChild(bookinfo)
            bookinfo.appendChild(title)
            bookinfo.appendChild(genre)
            bookinfo.appendChild(author)
            bookinfo.appendChild(pages)
            bookinfo.appendChild(status)
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

function Reload(){
    CardContainer.innerHTML = '';
    DisplayCards();
}

function DeleteBook(index){
    myLibrary.splice(index, 1);
    Reload();
}

function StatusChange(index){
    if(myLibrary[index].status == "Finished"){
        myLibrary[index].status = "Reading";
    }else{
        myLibrary[index].status = "Finished";
    }
    Reload();
}