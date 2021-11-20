import React from 'react';
import PropTypes from 'prop-types';

import BookShelfChanger from './BookShelfChanger';

function Book(props) {
  const book= props.book;
  const authors = book.authors?.length > 1 ? book.authors.join(', ') : book.authors;
  const imageURL = book?.imageLinks?.smallThumbnail;

  return (
    <li>
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover' 
            style={{ width: 128, height: 188,
            backgroundImage: `url(${imageURL})` }}>
          </div>
          <BookShelfChanger
            currentShelf={book.shelf}
            book={book}
            updateUserBookShelf={props.updateUserBookShelf} />
        </div>
        <div className='book-title'>
          {book.title}
        </div>
        <div className='book-authors'>
          {authors}
        </div>
      </div>
    </li>
  );
}

export default Book;

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateUserBookShelf: PropTypes.func.isRequired,
}