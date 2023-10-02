const OpenAddModal = document.querySelector('#add_button');
const AddBookModal = document.querySelector('.add_book_dialog');
const CloseAddModal = document.querySelector('#add_book_cancel');

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
})
// Delete book modal
// Still thikning how to do this