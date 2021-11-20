import React from 'react';
import PropTypes from 'prop-types';
import AddBook from '../AddBook';
import BookShelf from '../BookShelf';
import Header from '../Header';
import * as defaults from '../../Defaults';

function BooksList(props){
  return (
    <div className='list-books'>
      <Header />
      <div className='list-books-content'>
        <div>
          {props.books.length > 1 && defaults.bookShelfs.map((shelf) => {
            return (shelf.display && <BookShelf
                key={shelf.key}
                shelfTitle={shelf.title}
                books={props.books.filter(book => book.shelf === shelf.key)}
                updateUserBookShelf={props.updateUserBookShelf} />)
          })}
        </div>
      </div>
      <AddBook />
    </div>
  );
}

export default BooksList;

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  updateUserBookShelf: PropTypes.func.isRequired,
}