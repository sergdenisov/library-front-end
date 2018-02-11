import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import FormElement from "../FormElement/FormElement";
import { addBook } from "../../actions/books";

const defaultState = {
  title: "",
  description: "",
  authors: "",
  tags: "",
  year: "",
  link: "",
  countTotal: ""
};

class BookModal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    headerText: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    actions: PropTypes.shape({
      addBook: PropTypes.func.isRequired
    }).isRequired
  };

  static defaultProps = {
    isOpen: false
  };

  state = defaultState;

  close = () => {
    this.setState(defaultState);
    this.props.onClose();
  };

  handleFormElementChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  submit = event => {
    const { actions, onClose } = this.props;
    const { authors, tags } = this.state;

    event.preventDefault();
    actions.addBook({
      ...this.state,
      authors: authors.split(",").map(author => ({ name: author.trim() })),
      tags: tags.split(",").map(tag => ({ text: tag.trim() }))
    });
    onClose();
    this.setState(defaultState);
  };

  render() {
    const { isOpen, headerText } = this.props;
    const {
      title,
      description,
      authors,
      tags,
      year,
      link,
      countTotal
    } = this.state;

    return (
      <section className={`modal${isOpen ? " active" : ""}`}>
        <div
          className="modal-overlay"
          onClick={this.close}
          role="presentation"
        />
        <form className="modal-container">
          <header className="modal-header">
            <div className="float-right">
              <Button type="clear" onClick={this.close} />
            </div>
            <h5 className="modal-title h5">{headerText}</h5>
          </header>
          <div className="modal-body">
            <FormElement
              id="modal-title"
              name="title"
              value={title}
              onChange={this.handleFormElementChange}
              label="Название"
            />
            <FormElement
              id="modal-description"
              name="description"
              value={description}
              onChange={this.handleFormElementChange}
              label="Описание"
              type="textarea"
            />
            <FormElement
              id="modal-authors"
              name="authors"
              value={authors}
              onChange={this.handleFormElementChange}
              label="Авторы"
            />
            <FormElement
              id="modal-tags"
              name="tags"
              value={tags}
              onChange={this.handleFormElementChange}
              label="Теги"
            />
            <FormElement
              id="modal-year"
              name="year"
              value={year}
              onChange={this.handleFormElementChange}
              label="Год"
              type="number"
            />
            <FormElement
              id="modal-link"
              name="link"
              value={link}
              onChange={this.handleFormElementChange}
              label="Ссылка"
              type="url"
            />
            <FormElement
              id="modal-count-total"
              name="countTotal"
              value={countTotal}
              onChange={this.handleFormElementChange}
              label="Количество"
              type="number"
            />
          </div>
          <footer className="modal-footer">
            <Button isSubmit type="primary" onClick={this.submit}>
              Сохранить
            </Button>
            <Button type="link" onClick={this.close}>
              Отменить
            </Button>
          </footer>
        </form>
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addBook }, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(BookModal);
