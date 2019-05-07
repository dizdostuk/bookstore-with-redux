import React, { Component } from 'react'; // eslint-disable-line
import BookListItem from "../book-list-item"; // eslint-disable-line
import Spinner from "../spinner"; //eslint-disable-line
import ErrorIndicator from "../error-indicator";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withBookstoreService } from "../hoc";
import { fetchBooks } from "../../actions";
import "./book-list.css";
import BookstoreService from '../../services/bookstore-service';

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() { 
    const { books, loading, error } = this.props;
    
    if(loading) {
      return <Spinner />;
    }
    if(error) {
      return <ErrorIndicator />
    }
    
    return <BookList books={books} />    
  }
}

const BookList = ({books}) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}><BookListItem book={book} /></li>
          )
        })
      }
    </ul>
  );
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  }
};
 
export default withBookstoreService()(connect( mapStateToProps, mapDispatchToProps)(BookListContainer));