import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Main.css";
import { getBooks } from "../../actions/books";
import Button from "../Button/Button";
import Books from "../Books/Books";
import Modal from "../BookModal/BookModal";

class Main extends Component {
  static propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    actions: PropTypes.shape({
      getBooks: PropTypes.func.isRequired
    }).isRequired
  };

  state = {
    isModalOpen: false
  };

  componentDidMount() {
    this.props.actions.getBooks();
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { books } = this.props;
    const { isModalOpen } = this.state;

    return (
      <main className="main">
        <div className="main__header">
          <h1>Книги</h1>
          <Button
            action="plus"
            size="lg"
            type="primary"
            onClick={this.openModal}
          />
        </div>
        <div className="columns main__content">
          <Books books={books} />
        </div>
        <Modal
          headerText="Добавление новой книги"
          isOpen={isModalOpen}
          onClose={this.closeModal}
        />
      </main>
    );
  }
}

export default connect(
  ({ books }) => ({ books }),
  dispatch => ({
    actions: bindActionCreators({ getBooks }, dispatch)
  })
)(Main);
