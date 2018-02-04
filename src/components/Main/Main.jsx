import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Main.css";
import Books from "../Books/Books";
import { getBooks } from "../../actions/books";

class Main extends Component {
  static propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    actions: PropTypes.shape({
      getBooks: PropTypes.func.isRequired
    }).isRequired
  };

  componentDidMount() {
    this.props.actions.getBooks();
  }

  render() {
    const { books } = this.props;

    return (
      <main className="main">
        <h1 className="main__header">Книги</h1>
        <div className="columns main__content">
          <Books books={books} />
        </div>
      </main>
    );
  }
}

function mapStateToProps({ books }) {
  return { books };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getBooks }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
