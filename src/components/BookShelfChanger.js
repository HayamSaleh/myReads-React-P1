import React from 'react';
import PropTypes from 'prop-types';
import * as defaults from '../Defaults';

function BookShelfChanger(props) {
  return (
    <div className='book-shelf-changer'>
      <select
        value={props.currentShelf || 'none'}
        onChange={(e) => props.updateUserBookShelf(props.book, e.target.value)}>
        <option key='move' value='move' disabled>Move to...</option>
        {defaults.bookShelfs.map(shelf => {
          return (
            <option 
              key={shelf.key}
              value={shelf.key}>
              {shelf.title}
            </option>
          )
        })}
      </select>
    </div>
  );
}

export default BookShelfChanger;

BookShelfChanger.propTypes = {
  currentShelf: PropTypes.string,
  book:PropTypes.object.isRequired,
  updateUserBookShelf: PropTypes.func.isRequired,
}