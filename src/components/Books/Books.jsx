import React from "react";
import PropTypes from "prop-types";
import Book from "../Book/Book";

function Books({ books }) {
  return books.map(book => (
    <div className="column col-3 mb-2" key={book.id}>
      <Book {...book} />
    </div>
  ));
}

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Books;
