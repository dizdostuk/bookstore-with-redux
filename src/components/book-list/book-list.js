import React, { Component } from 'react'; // eslint-disable-line
import BookListItem from "../book-list-item"; // eslint-disable-line
import Spinner from "../spinner"; //eslint-disable-line
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withBookstoreService } from "../hoc";
import { booksLoaded } from "../../actions";
import "./book-list.css";

class BookList extends Component {

  componentDidMount() {
    const { bookstoreService, booksLoaded } = this.props;
    bookstoreService.getBooks()
      .then((data) => booksLoaded(data));

  }

  render() { 
    const { books, loading } = this.props;
    
    if(loading) {
      return <Spinner />;
    }
    
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
}

const mapStateToProps = ({books, loading}) => {
  return { books, loading };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    booksLoaded
  }, dispatch);
};
 
export default withBookstoreService()(connect( mapStateToProps, mapDispatchToProps)(BookList));