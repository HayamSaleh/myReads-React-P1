import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import Book from '../Book';
import {adjustUpdatedBookShelf} from '../../BookUtils';

function Search(props){
  const [books, setBooks] = useState([]);
  const [keyword, setKeyword] = useState('');

  const adjustBooksShelfAndSetState = (searchResult) => {
    let newSearchResults = [];

    if(searchResult instanceof Array){
      props.userBooks.forEach(userBook => {
        adjustUpdatedBookShelf(userBook, searchResult);
      });
      newSearchResults = searchResult;
    }
    setBooks(newSearchResults)
  }

  const search = (e) => {
    const keyword = e.target.value;
    if(keyword !== ''){
      BooksAPI.search(keyword).then(books => adjustBooksShelfAndSetState(books));
    } else {
      setBooks([]);
    }
    setKeyword(keyword)
  }

  const updateBookShelf = (updatedBook, shelf) => {
    updatedBook.shelf = shelf;
    adjustUpdatedBookShelf(updatedBook, books);
    setBooks([...books])
    props.updateUserBookShelf(updatedBook, shelf, true)
  };

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link className='close-search' to='/' />
        <div className='search-books-input-wrapper'>
          <input 
            type='text' 
            placeholder='Search by title or author'
            value={keyword} 
            onChange={search}/>
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {(books.length > 1) && books.map(book => {
            return (
              <Book 
                key={book.id} 
                book={book}
                updateUserBookShelf={updateBookShelf} />
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export default Search;

Search.propTypes = {
  userBooks: PropTypes.array.isRequired,
  updateUserBookShelf: PropTypes.func.isRequired,
}