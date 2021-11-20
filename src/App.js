import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BooksList from './components/pages/BooksList';
import Search from './components/pages/Search';
import * as BooksAPI from './BooksAPI';
import {adjustUpdatedBookShelf} from './BookUtils';

import './App.css';

function BooksApp(){
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll()
      .then((books) => setBooks(books));
  }, []);

  const updateUserBookShelf = (updatedBook, shelf, addIfNotExist) => {
    updatedBook.shelf = shelf;
    adjustUpdatedBookShelf(updatedBook, books, addIfNotExist);
    BooksAPI.update(updatedBook.id, shelf)
      .then(() =>
        //array spreaded to avoid that react may not see the reference array changes
        setBooks([...books]) 
      );
  }

  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' 
            element={
              <BooksList
                books={books} 
                updateUserBookShelf={updateUserBookShelf} />
              } />
          <Route exact path='/search' 
            element={
              <Search
                userBooks={books} 
                updateUserBookShelf={updateUserBookShelf} />
              } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default BooksApp;
