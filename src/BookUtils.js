export const adjustUpdatedBookShelf = (updatedBook, books, addIfNotExist) => {
  const bookIndex = books.findIndex((book => book.id === updatedBook.id));
  
  if(bookIndex !== -1){
    books[bookIndex] = updatedBook;
  } else if(addIfNotExist){
    books.push(updatedBook)
  }
}