import React, { Component } from 'react'; // eslint-disable-line
import BookListItem from "../book-list-item"; // eslint-disable-line
import Spinner from "../spinner"; //eslint-disable-line
import ErrorIndicator from "../error-indicator"; //eslint-disable-line
import { connect } from "react-redux";
import { compose } from '../../utils';
import { bindActionCreators } from "redux"; //eslint-disable-line
import { withBookstoreService } from "../hoc";
import { fetchBooks, bookAddedToCart } from "../../actions";
import "./book-list.css";
import BookstoreService from '../../services/bookstore-service'; //eslint-disable-line

const BookList = ({books, onAddedToCart}) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem
                onAddedToCart={() => onAddedToCart(book.id)}
                book={book} />
              </li>
          )
        })
      }
    </ul>
  );
};

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() { 
    const { books, loading, error, onAddedToCart } = this.props;
    
    if(loading) {
      return <Spinner />;
    }
    if(error) {
      return <ErrorIndicator />
    }
    
    return <BookList onAddedToCart={onAddedToCart} books={books} />    
  }
}



const mapStateToProps = ({ bookList: { books, loading, error }}) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
  }
};
 
export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));