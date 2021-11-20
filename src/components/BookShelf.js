import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import {getEmptyShelfMessage} from '../Defaults';

function BookShelf(props) {

  const renderBooksList = () => {
    return (
      <ol className='books-grid'>
        {props.books.map((book) => {
          return (
            <Book
              key={book.id}
              book={book}
              updateUserBookShelf={props.updateUserBookShelf} />
          )
        })}
      </ol>
    );
  }

  return (
    <div className='bookshelf'>
    <h2 className='bookshelf-title'>
      {props.shelfTitle}
    </h2>
    <div className='bookshelf-books'>
      {props.books.length > 1 ? 
        renderBooksList() : getEmptyShelfMessage(props.shelfTitle)}
    </div>
  </div>
  );
}

export default BookShelf;

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  updateUserBookShelf: PropTypes.func.isRequired,
}