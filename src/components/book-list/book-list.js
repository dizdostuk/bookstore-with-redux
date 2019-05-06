import React, { Component } from 'react'; // eslint-disable-line
import BookListItem from "../book-list-item"; // eslint-disable-line
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withBookstoreService } from "../hoc";
import { booksLoaded } from "../../actions";
import "./book-list.css";

class BookList extends Component {

  componentDidMount() {
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    this.props.booksLoaded(data);
  }

  render() { 
    const { books } = this.props;
    return (
      <ul>
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

const mapStateToProps = ({books}) => {
  return { books };
};

const mapDispatchToProps = () => {
  return bindActionCreators({
    booksLoaded
  });
};
 
export default withBookstoreService(connect( mapStateToProps, mapDispatchToProps)(BookList));