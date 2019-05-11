const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUESTED'
  };
};

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  }
};


const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  };
};

const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOKS_ADDED_TO_CART',
    payload: bookId
  }
};

const bookDecrease = (bookId) => {
  return {
    type: 'BOOK_DECREASE',
    payload: bookId
  }
};

const bookDelete = (bookId) => {
  return {
    type: 'BOOK_DELETE',
    payload: bookId
  }
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

export {
  fetchBooks,
  bookAddedToCart,
  bookDecrease,
  bookDelete,
};